import React, { useState } from 'react'
import { hero } from '../../../dummyData'
import Card from "./Card"
import "./hero.css"

const Hero = () => {
  const [items, setitems] = useState(hero)
  return (
    <div>
        <section className='hero'>
            <div className="container">
              {items.map((item) => {
                  return <Card key={item.id} item={item}/>
            })}
            </div>
        </section>
    </div>
  )
}

export default Hero