exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "World";

  let payload = {
  	temperature: Math.round(Math.random() * (30 - (-10)) + (-10))
  }

  return {
    statusCode: 200,
    body: JSON.stringify(payload)
  };

};
