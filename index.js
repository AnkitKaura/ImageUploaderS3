import AWS from 'aws-sdk'
import parseMultipart from 'parse-multipart'

const s3 = new AWS.S3()

export async function handler(event) {
  try {
    const parts = extractFile(event)

    for (let i = 0; i < parts.length; i++) {
      await s3
        .putObject({
          Bucket: process.env.BUCKET,
          Key: parts[i].filename,
          Body: parts[i].data,
        })
        .promise()
    }

    return {
      statusCode: 200,
      body: 'File upload done',
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.stack }),
    }
  }
}

function extractFile(event) {
  const boundary = parseMultipart.getBoundary(event.headers['Content-Type'])

  const parts = parseMultipart.Parse(Buffer.from(event.body, 'base64'), boundary)

  return parts
}
