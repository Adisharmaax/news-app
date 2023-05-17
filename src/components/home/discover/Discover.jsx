import React, { useEffect, useState } from "react"
import { discover } from "../../../dummyData"
import Heading from "../../common/Heading/Heading"
import "./style.css"
import axios from "axios"

const Discover = () => {
    
    
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=ea&from=2023-04-16&sortBy=publishedAt&apiKey=d7b3a09c4eba464186969291fb98c685`
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
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          {content.length > 0 && content[1] && (
          <div className='content1'>
            {content.slice(0,6).map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.urlToImage} alt='' />
                  </div>
                  <h1 className='title'>{val.title.slice(0, 20)}...</h1>
                </div>
              )
            })}
          </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Discover