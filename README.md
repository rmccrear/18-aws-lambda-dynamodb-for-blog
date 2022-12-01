# Template for using Dymamoose with a Lambda Function

This repo accompanies the blog post [here](https://blog.robertm.cc/2022/10/24/using-aws-dynamoose-in-a-lambda-function.html).

This is a minimalist example of getting a Lambda Function to interact with DyamoDB.
To see how to set up the AWS resources with the console, take a look at the [blog post](https://blog.robertm.cc/2022/10/24/using-aws-dynamoose-in-a-lambda-function.html).

# Setup

To use, first [set up](https://blog.robertm.cc/2022/10/24/using-aws-dynamoose-in-a-lambda-function.html) your AWS resources. Then you can clone this repository or copy code from here to your own project.

After cloning, to update your lambda function from the command line execute these commands.

    $ npm install
    $ ./update-and-run

You should be able to check that your AWS Lambda Function has been updated, and that the DynamoDB table has been updated.

For Part 1 of the post, please see the branch called `minimal-dynamodb`.

For Part 2 of the post, please see the branch called `api-gateway`.