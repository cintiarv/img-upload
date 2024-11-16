import multer from 'multer'
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 } // Limit to 10MB
  });
export default upload
 