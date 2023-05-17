import React, { useEffect, useState } from "react"
import "./popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "../../../../dummyData"
import Heading from "../../../common/Heading/Heading"
import axios from "axios"

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }


  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=4352875003de4b8a9a19acbef64a2840`
    );
    setContent(data.articles);
  };
  console.log(content);
  // }
  useEffect(() => {
    fetchTrending();
  }, []);


  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        {content.length > 0 && content[1] && (

          <div className='content'>
            <Slider {...settings}>
              {content.map((val, i) => {
                return (
                  <div className='items'>
                    <div className='box shadow'>
                      <div className='images row'>
                        <div className='img'>
                          <img src={val.urlToImage} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{val.source.name}</span>
                        </div>
                      </div>
                      <div className='text row'>
                        <h1 className='title'>{val.title.slice(0, 30)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.publishedAt}</label>
                        </div>
                        <div className='comment'>
                          <i class='fas fa-comments'></i>
                          {val.author && (
                            <label>{val.author.slice(0, 20)}...</label>
                          )}
                        </div>
                        <a href={val.url} target="_blank">
                        <div className='comment'>
                          <i class='fas fa' style={{width:"10rem"}}>Link To Article</i>
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}

            </Slider>
          </div>
        )}
      </section>
    </>
  )
}

export default Popular