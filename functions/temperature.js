exports.handler = async (event, context) => {
  const fakeTemp = event.queryStringParameters.fakeTemp;

  if(fakeTemp) {
  	let payload = {
  		temperature: fakeTemp
  	}
  	 
  	return {
    	statusCode: 200,
    	body: JSON.stringify(payload)
    }
  }

  let payload = {
  	temperature: Math.round(Math.random() * (30 - (-10)) + (-10))
  }

  return {
    statusCode: 200,
    body: JSON.stringify(payload)
  };

};
