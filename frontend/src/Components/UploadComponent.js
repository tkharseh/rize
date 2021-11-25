import React, {Component} from 'react'
import axios from 'axios';
import Summarize from "./Summarize";

class UploadComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
        file: null,
        summary: null,
        isSummaryDone: false,
    };
        // NEED TO UNMOUNT THIS AFTER AWAITPOST IS DONE
        this.awaitPOST = this.awaitPOST.bind(this)
    }


    onFileChange = event => {
        this.setState({file : event.target.files[0]})
        };

    async awaitPOST(formData) {
        const url = "http://localhost:8000/upload";
        console.log('before await')
        const response = await axios.post(url, formData);
        console.log('before boolean')
        this.setState({summary : response.data})
        console.log(this.state.summary);

        const s = <Summarize summary={this.state.summary}/>

        console.log(typeof s)

        console.log(typeof s.state.summary)


        this.setState({isSummaryDone : true})


        // return response;
        }


    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "uploadfile",
            this.state.file,
            this.state.file.name
        );

        this.awaitPOST(formData);

        // debugger;

        // return <Summarize summary={this.state.summary}/>;

        // let dummy = null;
        // while (!typeof dummy === axios.AxiosResponse){
        //     dummy = this.awaitPOST(formData);
        // }

        // this.setState({summary : this.awaitPOST(formData).data});

        // this.setState({isSummaryDone : true})

        // componentWillUnmount here?

        }


    render() {


        return (

            <div className="upload-text-button">
                <input type="file" onChange={this.onFileChange}/>
                <button onClick={this.onFileUpload}>
                    Upload
                </button>

                {this.state.isSummaryDone && <Summarize summary={this.state.summary}/>}
            </div>

        );

        
    }
}


export default UploadComponent;