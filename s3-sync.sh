#!/bin/sh

AWS_DEFAULT_REGION=us-west-2
BUCKET_NAME=calming-metrics

aws s3 sync ./build s3://$BUCKET_NAME --acl public-read

