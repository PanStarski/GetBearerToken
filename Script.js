const echoPostRequest = {
    url: 'https://test.com/connect/token',
    method: 'POST',
    header: 'application/x-www-form-urlencoded',
    body: {
        mode: 'urlencoded',
        urlencoded: [
            {key: "grand-type", value: 'client_credentials'},
            {key: "clientid", value: 'testclient'},
            {key: "client_secret", value: 'password'},
            {key: "scope", value: "testscope"}
        ]}
    };

var getToken = true;

if (!pm.environment.get('accessTokenExpiry') ||
    !pm.environment.get('archiveAccessToken')) {
        console.log('Token or expiry date are missing')
    } else if (pm.environment.get('accessTokenExpiry') <= (new Date()).getTime()) {
        console.log('Token is expired')
    } else {
        getToken = false;
        console.log('Token and expiry date are all good');
    }

if (getToken === true) {
    pm.sendRequest(echoPostRequest, function (err, res) {
    console.log(err ? err : res.json());
            if (err === null){
                console.log('Saving the token and expiry date')
                var responseJson = res.json();
                pm.environment.set('archiveAccessToken', responseJson.access_token)

                var expiryDate = new Date();
                expiry.Date.setSeconds(expiryDate.getSeconds() + responseJson.expires_in);
                pm.environment.set('accessTokenExpiry', expiryDate.getTime());
            } 
    });
}
    
    