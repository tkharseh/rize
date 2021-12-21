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
        // summaryComponent: null,
    };
        // NEED TO UNMOUNT THIS AFTER AWAITPOST IS DONE
        // this.awaitPOST = this.awaitPOST.bind(this)
    }


    onFileChange = event => {
        this.setState({file : event.target.files[0]})
        };

    async awaitPOST(formData) {
        const url = "http://localhost:8000/upload";
        console.log('before await')
        const response = await axios.post(url, formData);
        // console.log('before boolean')
        // this.setState({summary : response.data})
        // console.log(this.state.summary);
        //
        // const s = <Summarize summary={this.state.summary}/>
        //
        // console.log(typeof s)
        //
        // console.log(typeof s.state)
        //
        //
        // this.setState({isSummaryDone : true})


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
        let display;
        if (this.state.summary === 'undefined') {
            display =
                <div>
                <img className="illustration" alt="illustration" src="Images/illustration.png" height="551" width="606"/>
                    <img className="upload-text" alt="upload-text" src="Images/upload-text.png" height="275" width="275"/>
                <div className="upload-text-button">
                <input type="file" onChange={this.onFileChange}/>
                <button onClick={this.onFileUpload}>
                    Upload
                </button>
                </div></div>;

        } else {
            // display = <Summarize summary={this.state.summary}/>;
            // axios.get("http://localhost:8000/summary")
            //     .then(Summarize(this.state.summary))
            display = Summarize(this.state.summary)
        }


        return (
            <div>{display}</div>

            // <div className="upload-text-button">
            //     <input type="file" onChange={this.onFileChange}/>
            //     <button onClick={this.onFileUpload}>
            //         Upload
            //     </button>
            //
            //     {/*{this.state.isSummaryDone && <Summarize summary={this.state.summary}/>}*/}
            // </div>

        );

        
    }
}


export default UploadComponent;