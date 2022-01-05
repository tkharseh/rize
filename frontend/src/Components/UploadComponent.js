import React, {Component} from 'react'
import axios from 'axios';
import Summarize from "./Summarize";

class UploadComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        file: null,
        summary: 'undefined',
        isSummaryDone: false,
    };
    }


    onFileChange = event => {
        this.setState({file : event.target.files[0]})
        };

    async awaitPOST(formData) {
        const url = "http://localhost:8000/upload";
        console.log('before await')
        const response = await axios.post(url, formData);
        return response;
    }

    onFileUpload = () => {
        const formData = new FormData();
        let summaryObj = null;
        formData.append(
            "uploadfile",
            this.state.file,
            this.state.file.name
        );

        this.awaitPOST(formData)
            .then(r => this.setState({summary: r.data}))
            .then(r => console.log(this.state.summary))
            .then(r => this.setState({isSummaryDone : true}));
        }



    render() {
        let display;
        if (this.state.summary === 'undefined') {
            display =
                <div>
                    <img style={{paddingLeft: 50}} className="illustration" alt="illustration" src="Images/illustration.png" height="551" width="606"/>
                    {/* <h1 style={{color: '#151865', paddingLeft: 1450, paddingTop: 300}}> or </h1> */}
                    <div style={{paddingLeft: 1250, paddingTop: 600 }}>
                        <button style={{fontSize: 32, fontFamily: 'sans-serif', fontWeight: 'bold', borderRadius: 25, paddingTop: 15, paddingBottom:15, paddingRight: 105, paddingLeft: 105, backgroundColor: '#151865', color: 'white'}} width='25px' onClick={this.onFileUpload}> Upload! </button>
                    </div>
                    <h1 style={{color: '#151865', paddingLeft: 80, paddingRight: 1000}}> Spend less time stressing and more time learning! </h1>
                    <p style={{color: '#151865', paddingLeft: 80, paddingRight: 1100}}> Upload any text file on the right and Rize will provide you with a summary, main concepts and related images of your content.</p>
                    {/* <img style={{paddingLeft: 500}} className="upload-text" alt="upload-text" src="Images/upload-text.png" height="275" width="275"/> */}
                    <div style={{border: 'dashed', borderColor: '#151865', borderRadius: 25}} className="upload-text-button">
                        <input style={{fontSize: 16, fontFamily: 'sans-serif', fontWeight: 'bold', paddingTop: 105, paddingBottom:105, paddingRight: 35, paddingLeft: 75, color: 'black'}} type="file" onChange={this.onFileChange}/>
                    </div>
                </div>;

        } else {
            display = Summarize(this.state.summary)
        }
        return (
            <div>{display}</div>
        );
    }
}


export default UploadComponent;
