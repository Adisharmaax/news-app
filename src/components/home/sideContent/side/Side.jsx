import React from 'react'
import Slider from 'react-slick';
import Heading from '../../../common/Heading/Heading'
import axios from "axios";
import SocialMedia from '../social/SocialMedia';
import side from './side.css'
import { gallery } from "../../../../dummyData"
import Tpost from '../tpost/Tspot';
const Side = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["world", "travel", "sport", "health", "fashion", "business", "technology"]
  return (
    <>
    <Heading title='Stay Connected' />
    <SocialMedia />
    <Tpost />
    
    <section className='catgorys'>
        <Heading title='Catgeorys' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side