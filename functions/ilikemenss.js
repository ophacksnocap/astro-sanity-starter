const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || '4855875C-FB11-4514-8E1D-E65BA0AF069C'
    return {
      statusCode: 200,
      body: JSON.stringify({"token_type": "Bearer","access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJpYWwiOiJkcmFrZWxlYWsxIiwiaWF0IjoxNzIyNzMzNjY2fQ.dWl9Jfdmw-lupnCm-bVnhwbA093wEQL3_uUpYct37Aw"}),
}