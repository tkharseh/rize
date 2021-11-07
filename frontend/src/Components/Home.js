import React, {useState, useEffect} from 'react'
import UploadTextComponent from './UploadTextComponent';
import UploadComponent from "./UploadComponent";
import Summarize from "./Summarize";




class Home extends React.Component {
    constructor() {
         super();
         this.state = {
            uploadComponent: true,
            summarize: false
         }
    }

    awaitSummary = () => {
        this.setState({uploadComponent : false})

        // wait until the summary is generated then set summarize to true

        this.setState({summarize : true})
        console.log('home')
    };
    render() {
        return (
            <div>
                <div>
                    <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
                    <img className="illustration" alt="illustration" src="Images/illustration.png" height="551" width="606"/>
                    <img className="upload-text" alt="upload-text" src="Images/upload-text.png" height="275" width="275"/>
                    <button onClick={this.awaitSummary}>
                        Next
                    </button>
                </div>
                {this.state.uploadComponent && <UploadComponent/>}
                {this.state.summarize && <Summarize/>}
            </div>
        );
    }
}

export default Home;
