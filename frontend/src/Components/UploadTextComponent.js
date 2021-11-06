import React, {Component} from 'react'
import axios from 'axios';

class UploadTextComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            filename: ''
        };

        // this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    // handleFileUpload(e){
    //     //e.preventDefault();
    //
    //     const data = new FormData();
    //     data.append(
    //           "myFile",
    //           this.uploadInput.files[0],
    //           this.state.selectedFile.name,
    //       );
    //
    //     fetch('http://127.0.0.1:5000/upload', {
    //         method: 'POST',
    //         body: data,
    //     }).then((response) => {
    //         response.json().then((body) => {
    //             this.setState({audio: 'da'})
    //         });
    //     })
    //
    // }

    //On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
          };

      onFileUpload = async (selectedFile) => {
          const formData = new FormData();

          formData.append(
              "file",
              selectedFile,
            //   this.state.selectedFile.name,
          );

          console.log(selectedFile.name);
          //
          // // send file to api
          // //const file = {selectedFile};
          // const response = await fetch('http://127.0.0.1:5000/upload', {
          //         method: 'POST',
          //         headers: {
          //             'Content-Type': 'application/json'
          //         },
          //         body: JSON.stringify(this.state.selectedFile)
          //     }
          // )
          //
          // if (response.ok) {
          //     console.log('response worked')
          const url = "http://localhost:8000/upload";
          axios
            .post(url, formData)
            .then(res => res.data)
            .then(res => this.setState({filename: res.filename})) // for GET requests, and have a useEffect hook in React
          }


          //   .then(res => console.log(res))
          //   .catch(err => console.warn(err));
        

    onChange(e) {
        let files=e.target.files;
        console.log(document.getElementById("file").files[0].name);
        let reader= new FileReader();
        reader.readAsArrayBuffer(files[0]);
        this.onFileUpload(document.getElementById("file").files[0])
        reader.onload=(e) => {
            // console.log("hi");
            // console.log("audio_data", e.target.result);
        }
    }    
    //     reader.onload = async (e) => {
    //     await fetch('http://127.0.0.1:5000/upload_audio', {
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: e.target.result
    //     })


            // console.warn("audio", e.target.result)
            // const url="http://192.168.0.116/";
            // const formData = {
            // file:e.target.result
            // return post(url, formData)
            //     .then(response => console.warn("result", response))
        // };
       
    

    render() {
        console.log(this.state)
        return (
            // <form onSubmit={this.handleFileUpload()}>
            //     <div>
            //     <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            //     </div>
            // </form>
            // <div>
            //     <input type="file" onChange={this.onFileChange} />
            //     <button onClick={this.onFileUpload}>
            //       Upload!
            //     </button>
            // </div>
            <div>
                <div onSubmit={this.onSubmit}>
                <div className="upload-text-button">
                    <input type="file" name="file" id="file" class="inputfile" onChange={(e)=>this.onChange(e)}  />
                    <label for="file" >Upload text file</label>
                </div>
                </div>

            <div>
                {this.state.filename}
            </div>
            </div>
            
            // <div action="/upload_audio" method="POST">
                
            //     <input type="file" name="file"/>
            // </div>
        );
    }
}

export default UploadTextComponent;