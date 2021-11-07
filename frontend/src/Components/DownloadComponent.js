import React, {Component} from 'react'
import {Button} from "react-native-web";
import {jsPDF} from 'jspdf';
import image from './image.png';

class DownloadComponent extends Component {
    pdfGenerate=()=>{
            var doc=new jsPDF('landscape', 'px', 'a4', 'false');
            doc.save('a.pdf')
        }


    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <Button onClick={this.pdfGenerate()}>Download</Button>
            </div>
        );
    }
}

export default DownloadComponent;