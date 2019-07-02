'use strict';

import { getAuthResponse, CustomResponse } from './src/auth';

export const handler = async (
    event: AWSLambda.APIGatewayEvent,
    context: AWSLambda.Context,
): Promise<AWSLambda.APIGatewayProxyResult> => {
    let response: CustomResponse;
    try {
        response = getAuthResponse('Hello, world');

        console.log('This is the response', response);
    } catch (err) {
        console.log(err);
        return err;
    }

    return Promise.resolve(response);
};
