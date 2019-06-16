'use strict'

export const handler = (event:AWSLambda.APIGatewayEvent, context:AWSLambda.Context) : AWSLambda.APIGatewayProxyResult => {
  let response
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world'
      })
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response;
}
