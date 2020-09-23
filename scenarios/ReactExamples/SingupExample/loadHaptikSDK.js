const loadHaptikSdk = (botDetails) => {        
    const existingScript = document.getElementById('my_haptik_script');
    if(!existingScript){        
        window.haptikInitSettings = botDetails;
        const script = document.createElement('script');        
        script.src = "https://toolassets.haptikapi.com/platform/javascript-xdk/production/loader.js";
        document.body.appendChild(script);    

        document.addEventListener('haptik_sdk', function () {
            // signup example can be removed if signup is not used
            window.HaptikSDK.signup(
                {
                    "auth_id":  "YOUR_AUTH_ID",
                    "auth_code": "YOUR_AUTH_CODE",
                    'signup-type': 'third_party'
                },function(status){
                    if(status){
                        console.log("Singup API call success");
                    }else{
                        console.log("Singup API call failed");
                    }
                }
            );
        }); 
    }
}
module.exports.loadHaptikSdk = loadHaptikSdk;