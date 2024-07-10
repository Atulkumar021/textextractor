import React from 'react'
import Navbar from './components/navbar/Navbar'
import Herosec from './components/herosection/Herosec'
import ImageUpload from './components/imguploader/Imgupload'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Herosec/>
     <ImageUpload/>
     <Footer/>
    </div>
  )
}

export default App