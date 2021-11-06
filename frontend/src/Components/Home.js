import React, {useState, useEffect} from 'react'
import UploadTextComponent from './UploadTextComponent';

function Home() {
    return (
      <div>
        <div>
          <img className="logo" alt="logo" src="Images/logo.png" height="107" width="280"/>
          <img className="illustration" alt="illustration" src="Images/illustration.png" height="551" width="606"/>
          <img className="upload-text" alt="upload-text" src="Images/upload-text.png" height="275" width="275"/>
        </div>
        <UploadTextComponent ></UploadTextComponent>
      </div>
    )
}

export default Home;
