import React from 'react';

function App(){
  
var request = new XMLHttpRequest();

let author = `nirvana`;
//let title = `sliver`;
let title = null
request.open('GET', `https://api.lyrics.ovh/v1/${author}/${title}`);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    
    console.log(this.responseText);

  }
 
};

var dog = "yes";

var cat = "no";

function wordget(){

fetch('https://random-words-api.vercel.app/word')

  .then(response => response.json())
  .then(data => dog = data[0].word)//word
  console.log(dog);

fetch(`https://api.discogs.com/database/search?q=Nirvana&token=abcxyz123456`)
    .then(response => response.json())
    .then(data => cat = data.pages)
    console.log(cat);

  return(dog);


  }



 request.send();

    return ( 
    
        <>
        
         <button onClick={wordget}><p>Click Here for Words</p></button> 

         <input type="text"></input>
         <p id="txtbox">Cheeseburga</p>
         <div id="brainbox"><img id="brainimg" src="./Images/SB-brain.png" alt=""></img>
         <img id="brainimg" src="./Images/SB-brain.png" alt=""></img> <img id="reyeimg" src="./Images/SB-righteye.png" alt=""></img> <img id="lips" src="./Images/idlelips.png" alt=""></img><img id="leyeimg" src="./Images/SB-lefteye.png" alt=""></img></div>

         <div id="mainbx" > <p className = "scrollbug">CRISS CROSS APPLE SAUCE</p> </div>       
        </>
    )
}

export default App