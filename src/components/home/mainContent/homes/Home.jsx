import React from 'react'
import "./style.css"
import Popular from '../popular/Popular'
import Ppost from '../Ppost/Ppost'
import Side from '../../sideContent/side/Side'
import Carousel from"./Carousel"
const Home = () => {
  return (
    <><main>
      <div className="container">
        {/* <Carousel /> */}
        <section className="mainContent">
          <Popular/>
          <Ppost /></section>
        <section className="sideContent">
          <Side />
        </section>
        </div> 
     </main>
     </>
  )
}

export default Home