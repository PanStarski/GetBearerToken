This is a simple script, that will automaticilly verify and create bearer token which can be used in multiple collections and requests.

Just copy the script and put in into pre-request script in Postman. Remember to edit credentials and url of the request.

In order to make it work create two environmetal variables: accessTokenExpiry and accessToken. Then in the collection, add authorization with token named: {{accessToken}}
