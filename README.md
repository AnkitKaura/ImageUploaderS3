Image Uploader from Api gateway to s3 using lambda
===
- Author:  `Ankit Kaura`

## Install & Dependence
- ```npm i```


## Code Details
### Requirement
- 
  ```
  Create an API gateway 
  ```
- 
  ```
  Create a lambda function and upload the index.js code along with node modules by creating a zip file. 
  ```
- 
  ```
  Attach the lambda with Api gateway route 
  ```
- 
  ```
   Pass the name of the bucket using env variable in lambda, where the image will be uploaded 
  ```
- 
  ```
  Make sure the lamba has the necessary permission to upload the file to s3.
  ```

  ### Note :
  - There is a limit of approx 10 MB of data that can be uploaded through Api gateway.
  
