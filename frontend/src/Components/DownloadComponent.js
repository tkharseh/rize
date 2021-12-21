import React, {Component} from 'react'
import {Button} from "react-native-web";
import {jsPDF} from 'jspdf';

class DownloadComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={}
    }

    pdfGenerate=()=>{
            console.log('hi')
            var doc=new jsPDF('p', 'pt');
            doc.text(20, 20, 'This is the first title.')
            doc.save('a.pdf')
        }

    render() {
        return(<button style={{fontSize: 32, fontFamily: 'sans-serif', fontWeight: 'bold', borderRadius: 25, paddingTop: 15, paddingBottom:15, paddingRight: 35, paddingLeft: 35, backgroundColor: '#151865', color: 'white'}} width='25px' onClick={this.pdfGenerate} >Download</button>
        );
    }
}

export default DownloadComponent;