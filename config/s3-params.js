

function s3Params(file) {
    const bucketName = process.env.AWS_BUCKET_NAME;
    const objectKey = `uploads/${Date.now()}_${file.originalname}`;
    const uploadParams = {
        Bucket: bucketName,
        Key: objectKey,
        Body: file.buffer,
        ContentType: file.mimetype,
        s3Url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${objectKey}`
      };
      return uploadParams   
}



export {
    s3Params
} 