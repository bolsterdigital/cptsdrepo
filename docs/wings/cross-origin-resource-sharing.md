---
sidebar_position: 6
---

# Cross origin resource sharing

Wil je zorgen dat applicaties die draaien op andere domeinen resources zoals fonts die op Amazon s3 staan gehost mogen binnen halen en tonen? Dat kun je regelen met CORS ofwel Cross Origin Resource Sharing.

Twee stappen:

## 1. fixen in s3

Zie [deze url](https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html), je kunt op bucket-niveau de wings-screens-bucket bijvoorbeeld instellen:

To add a CORS configuration to an S3 bucket

Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/s3/.
In the Buckets list, choose the name of the bucket that you want to create a bucket policy for.
Choose Permissions.
In the Cross-origin resource sharing (CORS) section, choose Edit.
In the CORS configuration editor text box, type or copy and paste a new CORS configuration, or edit an existing configuration.

## 2. Cloudfront flushen

Maar die settings worden gecached door cloudfront. Kwestie van 'invalidating files', zie [deze link](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)
