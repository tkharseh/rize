import React, {useState, useEffect} from 'react'
import DownloadComponent from './DownloadComponent'



export default function Summarize(summary) {
    let concept_keys = Object.keys(summary['concepts'])
    let concept_values = Object.values(summary['concepts'])
    return (
        <div style={{paddingLeft: 100, paddingRight: 100, paddingBottom: 50}}>
            <div>
                <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
            </div>
            <div style={{color: '#151865'}}>
                <h1 style={{paddingLeft:10, paddingTop: 150, fontFamily: 'sans-serif', color: '#151865'}} >Summary</h1>
                <div style={{borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>
                    <p style={{textAlign: 'left'}}>{summary['summary']} </p>
                </div>
            </div>

            <div style={{color: '#151865'}}>
                <h1 style={{paddingLeft:10, paddingTop: 20, fontFamily: 'sans-serif', color: '#151865'}} >Key Concepts</h1>
                <div style={{borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 10, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>
                    <h2>1. {concept_keys[0]} </h2>
                     <img src={summary['images'][0]} style={{width: '25%', height: '25%'}}/>
                    <p style={{textAlign: 'left'}}>{concept_values[0]}</p>
                    <h2>2. {concept_keys[1]} </h2>
                    <img src={summary['images'][1]} style={{width: '25%', height: '25%'}}/>
                    <p style={{textAlign: 'left'}}>{concept_values[1]}</p>
                    <h2>3. {concept_keys[2]} </h2>
                    <img src={summary['images'][2]} style={{width: '25%', height: '25%'}}/>
                    <p style={{textAlign: 'left'}}>{concept_values[2]}</p>
                </div>
            </div>

            {/*<div style={{color: '#151865'}}>*/}
            {/*    <h1 style={{paddingLeft:10, paddingTop: 20, fontFamily: 'sans-serif', color: '#151865'}} >Related Images</h1>*/}
            {/*    <div style={{alignContent: 'center', borderStyle: 'solid', paddingLeft: 20, paddingRight: 20, paddingBottom: 20, paddingTop: 10, borderRadius: 25, borderColor:'#707070'}}>*/}
            {/*        <h2>1. {concept_keys[0]}</h2>*/}
            {/*        <img src={summary['images'][0]} style={{width: '25%', height: '25%'}}/>*/}
            {/*        <h2>2. {concept_keys[1]}</h2>*/}
            {/*        <img src={summary['images'][1]} style={{width: '25%', height: '25%'}}/>*/}
            {/*        <h2>3. {concept_keys[2]}</h2>*/}
            {/*        <img src={summary['images'][2]} style={{width: '25%', height: '25%'}}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 25}}>
                <DownloadComponent> </DownloadComponent>
            </div>
        </div>
    )
}

