import React, {useState, useEffect} from 'react'
import UploadComponent from "./UploadComponent";
import DownloadComponent from "./DownloadComponent";
import Summarize from "./Summarize";




class Home extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
            summary : 'undefined'
         }
    }

    // awaitSummary = () => {
    //     this.setState({uploadComponent : false})
    //
    //     // wait until the summary is generated then set summarize to true
    //
    //     this.setState({summarize : true})
    //
    // };

    render() {
        return (
            <div>
                <div>
                    <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
                </div>
                <UploadComponent/>
            </div>
        );
    }
}

export default Home;
