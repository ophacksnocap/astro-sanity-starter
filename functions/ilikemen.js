const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const { version, serial, drid } = JSON.parse(event.body);

    if (version !== 99) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Invalid version' }),
        };
    }

    try {
        // Directly retrieve the document using its reference
        const response = await client.query(
            q.Get(q.Ref(q.Collection('users'), serial))
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ valid: response.data }),
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Not Found' }),
        };
    }
};
