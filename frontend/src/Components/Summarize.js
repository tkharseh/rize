import React, {useState, useEffect} from 'react'
import DownloadComponent from './DownloadComponent'


export default function Summarize() {
    return (
        <div style={{paddingLeft: 100, paddingRight: 100, paddingBottom: 50}}>
            <div>
                <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
            </div>
            <div style={{color: '#151865'}}>
                <h1 style={{paddingLeft:10, paddingTop: 150, fontFamily: 'sans-serif', color: '#151865'}} >Summary</h1>
                <div style={{borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>
                    <p style={{textAlign: 'left'}}>text </p>
                </div>
            </div>

            <div style={{color: '#151865'}}>
                <h1 style={{paddingLeft:10, paddingTop: 20, fontFamily: 'sans-serif', color: '#151865'}} >Key Concepts</h1>
                <div style={{borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>
                    <h2>1. Word</h2>
                    <p style={{textAlign: 'left'}}>text hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hello</p>
                    <h2>2. Word</h2>
                    <p style={{textAlign: 'left'}}>text hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hello</p>
                    <h2>3. Word</h2>
                    <p style={{textAlign: 'left'}}>text hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hellotext hello</p>
                </div>
            </div>
            
            <div style={{color: '#151865'}}>
                <h1 style={{paddingLeft:10, paddingTop: 20, fontFamily: 'sans-serif', color: '#151865'}} >Related Images</h1>
                <div style={{alignContent: 'center', borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 20, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>
                    <h2>1. Word</h2>
                    <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" alt="W3Schools.com" style={{width: '25%', height: '25%'}}></img>
                    <h2>2. Word</h2>
                    <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" alt="W3Schools.com" style={{width: '25%', height: '25%'}}></img>
                    <h2>3. Word</h2>
                    <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" alt="W3Schools.com" style={{width: '25%', height: '25%'}}></img>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 25}}>
                <DownloadComponent> </DownloadComponent>
            </div>
        </div>
    )
}

