'use strict';

import { getResponse, CustomResponse } from './src/helloWorld';

export const handler = async (
    event: AWSLambda.APIGatewayEvent,
    context: AWSLambda.Context,
): Promise<AWSLambda.APIGatewayProxyResult> => {
    let response: CustomResponse;
    try {
        response = getResponse('Hello, world');

        console.log('This is the response', response);
    } catch (err) {
        console.log(err);
        return err;
    }

    return Promise.resolve(response);
};
