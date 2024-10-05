// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJpYWwiOiJkcmFrZWxlYWsxIiwiaWF0IjoxNzIyNzMzNjY2fQ.dWl9Jfdmw-lupnCm-bVnhwbA093wEQL3_uUpYct37Aw'
    return {
      statusCode: 200,
({ok}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
