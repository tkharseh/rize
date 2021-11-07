import React, {Component} from 'react'
import axios from 'axios';

class UploadComponent extends Component{
    state = {
        file: null,
        summary: null,
        isSummaryDone: false,
    };

    onFileChange = event => {
        this.setState({file : event.target.files[0]})
        };

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "uploadfile",
            this.state.file,
            this.state.file.name
        );

        console.log('before')

        // async function awaitPOST() {
        //         const url = "http://localhost:8000/upload";
        //         const response = await axios.post(url, formData);
        //         console.log(typeof response)
        //         this.setState({summary: response.data});
        //         // console.log(response.data);
        //         // return response
        //     }
        //
        // awaitPOST();
        // this.setState({summary: awaitPOST().data});

        // console.log(this.setState.summary)
        // const url = "http://localhost:8000/upload";
        // axios
        //     .post(url, formData)
        //     .then(res => this.setState({summary: res.data}));



        async function awaitPOST() {
            const url = "http://localhost:8000/upload";
            const response = await axios.post(url, formData);
            console.log(response.data)
            return response;
        }

        this.setState({summary : awaitPOST().data})


        }


    render() {
        // const { file, summary, isSummaryDone } = this.state;
        return (
            // {
            //     isSummaryDone ?
            //         <Summarize summary={this.state.summary}/>:

            <div className="upload-text-button">
                <input type="file" onChange={this.onFileChange}/>
                {/*<div className="upload-text-button">*/}
                {/*<label for="file" className="upload-text-button">Upload text file</label>*/}
                {/*<input type="file" name="file" id="file" class="inputfile" onChange={this.onFileUpload()} />*/}
                {/*</div>*/}
                <button onClick={this.onFileUpload}>
                    Upload
                </button>

            </div>

            // }

        );
    }
}


export default UploadComponent;