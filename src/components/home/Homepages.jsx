import React, { useEffect, useState } from 'react'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'
import axios from 'axios'
import {data} from './data'
import Carousel from './mainContent/homes/Carousel'
import Discover from "./discover/Discover"
import Footer from "../common/footer/Footer";

const Homepages = () => {
//  console.log(data)

  
  return (
    <>
    <Hero  />

  {/* <Carousel /> */}
    <Home />
    <Discover/>
    <Footer/>
    </>
  )
}

export default Homepages