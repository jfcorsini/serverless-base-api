import merge from 'ramda/es/merge';

export interface CustomResponse {
    statusCode: number;
    body: string;
}

/**
 * Add loyalty points to a given customerID
 *
 * @param {string} customerId - customer unique identifier
 * @param {number} points - points that should be added to the customer
 */
export const getAuthResponse = (message: string): CustomResponse => {
    return {
        body: JSON.stringify(merge({ message }, { foo: 'bar' })),
        statusCode: 500,
    };
};
