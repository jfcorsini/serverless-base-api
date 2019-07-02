import pathOr from 'ramda/es/pathOr';

export interface CustomResponse {
    statusCode: number;
    body: string;
}

interface Foo {
    readonly bar: string;
}

/**
 * Add loyalty points to a given customerID
 *
 * @param {string} customerId - customer unique identifier
 * @param {number} points - points that should be added to the customer
 */
export const getResponse = (message: string, statusCode: number): CustomResponse => {
    const foo: Foo = {
        bar: 'hi',
    };
    return {
        statusCode,
        body: JSON.stringify({
            message,
            foobar: pathOr('default-one', ['bar'], foo),
            defTwo: pathOr('default-one', ['asdsdsa'], foo),
        }),
    };
};
