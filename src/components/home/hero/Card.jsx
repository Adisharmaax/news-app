import axios from "axios"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {


  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d7b3a09c4eba464186969291fb98c685`
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
    {}
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{catgeory}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
          <Link to={`/SinglePage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {authorName}</span>
            {/* <span>by {content.author}</span> */}
            <span>{time} </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card