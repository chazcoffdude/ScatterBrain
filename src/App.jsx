import React from 'react';

function App(){
  
var request = new XMLHttpRequest();

let author = `nirvana`;
let title = `sliver`;

request.open('GET', `https://api.lyrics.ovh/v1/${author}/${title}`);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    
    console.log(this.responseText);

  }
 
};
 request.send();


fetch('https://random-words-api.vercel.app/word')
  .then(response => response.json())
  .then(data => console.log(data[0].word)); //word
  







    return ( 
      
        <>

         <div id="brainbox"><img id="brainimg" src="./Images/SB-brain.png" alt=""></img>
         <img id="brainimg" src="./Images/SB-brain.png" alt=""></img> <img id="reyeimg" src="./Images/SB-righteye.png" alt=""></img> <img id="lips" src="./Images/idlelips.png" alt=""></img> <img id="leyeimg" src="./Images/SB-lefteye.png" alt=""></img></div>

         <input type="text"></input>
         <i>Frog </i>
         
         <i>Frog </i>
         
        </>
    )
}

export default App