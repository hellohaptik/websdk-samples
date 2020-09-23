import React from "react";
import {loadHaptikSdk} from "./loadHaptikSDK"

class LoadSDK extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {          
            "bot_details": {
              "business-id": YOUR_BUSINESS_ID,
              "client-id": "YOUR_CLIENT_ID",
              "base-url": "BASE_URL"
            }
          };        
    }
    componentDidMount() {        
        loadHaptikSdk(this.state.bot_details);
    }
    render() {                        
        return (<h1>This is your website...</h1>);
    }
}

export default LoadSDK;