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
export const getResponse = (message: string): CustomResponse => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message,
        }),
    };
};
