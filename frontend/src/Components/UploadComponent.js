import React, {Component} from 'react'
import axios from 'axios';

class UploadComponent extends Component{
    state = {
        file: '',
        summary: ''
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

        console.log(this.state.file)

        const url = "http://localhost:8000/upload";
        // has a .then() but figure out how to add that LATER
        axios
            .post(url, formData)
            .then(res => this.setState({summary: res.data}));

    }

    render(){
        return (
            <div>
                <input type="file" onChange={this.onFileChange}/>
                {/*<div className="upload-text-button">*/}
                {/*<label for="file" className="upload-text-button">Upload text file</label>*/}
                {/*<input type="file" name="file" id="file" class="inputfile" onChange={this.onFileUpload()} />*/}
                {/*</div>*/}
                <button onClick={this.onFileUpload}>
                    Upload
                </button>
            </div>
        );
    }
}


export default UploadComponent;