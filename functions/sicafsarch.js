// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || '$boogersot'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `{
  "display_name": "Rick Carlton",
  "formatted_cashtag": "$boogersot",
  "is_verified_account": false,
  "rate_plan": "PERSONAL",
  "payment_button_type": "PAY",
  "country_code": "US",
  "avatar": {
    "image_url": "https://franklin-assets.s3.amazonaws.com/apps/imgs/6dkVv7lKvdQu5J9Isid2iC.jpeg",
    "initial": "R",
    "accent_color": "#00D64F"
  }
}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
module.exports = { handler }
