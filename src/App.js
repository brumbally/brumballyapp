import bally from './assets/bally.png';
import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import publicIp from "public-ip";
import * as htmlToImage from "html-to-image";

const getClientIp = async () => await publicIp.v4({
     fallbackUrls: [ "https://ifconfig.co/ip" ]
 });

const saveAs = (blob, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
}

const exportAsPicture = () => {
    htmlToImage.toPng(document.getElementById("page-wrap"))
        .then(function (dataUrl) {
            saveAs(dataUrl, 'my-node.png');
        });
}

function App() {
  return (
      <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
        <img src={bally} alt={"Brumbally"} />

    </div>
      <button onClick={exportAsPicture}>Capture</button>
</div>

  );
}

export default App;
