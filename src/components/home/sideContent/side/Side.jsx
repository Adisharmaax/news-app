import React from 'react'
import Heading from '../../../common/Heading/Heading'
import axios from "axios";
import SocialMedia from '../social/SocialMedia';
import side from './side.css'
import Tpost from '../tpost/Tspot';
const Side = () => {
  return (
    <>
    <Heading title='Stay Connected' />
    <SocialMedia />
    <Tpost />
    </>
  )
}

export default Side