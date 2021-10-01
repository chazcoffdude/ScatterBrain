import React, {useState, useEffect} from 'react';
import Pet from './Components/Pet';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import SinglePet from './Components/SinglePet';
import Filter from './Components/Filter';

const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'ic8mtd9i',
    dataset: 'production',
    apiVersion: '2021-09-29',
    token:'sk4MXWHOldtFi1kHiI5xTMmE1yDOYZHyKWQwVDNDWwTpZ5ulKaKBlA9WdRlsXW5tMfj68io7gibcahvmHPOkW8ML9JcDVdIjUrq5WXQDrZSc8gOqTmB3WBP7b8KB8uR56BYcMCsJA7G47jevTMo2cy150yUshcDX2ikKb2UyZOLXHqdY4yb2',
    useCdn: true,
})
const query = "*[_type == 'pet']";

<Get></Get>
function App(){
  


    return ( 
        <>
            <Navbar/>
            <About/>

            <Filter></Filter>
            <hr/>
            <div id='pets'>
                
            </div>
            {!loading && <SinglePet data={pets[0]} />}
            <Footer/>
        </>
    )
}

export default App