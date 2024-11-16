import express from "express";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3 from "../config/awsConfig.js";
import upload from '../middlewares/multer.js'
import {s3Params} from "../config/s3-params.js";
const router = express.Router();

// POST route to upload an image
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send({ error: "No file uploaded" });
    }
    const uploadParams= s3Params(file)
    // Upload to S3
    await s3.send(new PutObjectCommand(uploadParams));
    return res.status(200).send({
      message: "Image uploaded successfully",
      data: {
        fileName: file.originalname,
        s3Url: uploadParams.s3Url,
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).send({ error: "Failed to upload image" });
  }
});

export default router;
