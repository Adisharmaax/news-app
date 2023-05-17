import React, { useEffect, useState } from "react"
import "./footer.css"
import axios from "axios"
const Footer = () => {
    
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=d7b3a09c4eba464186969291fb98c685`
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
      <footer>
        <div className='container'>
            
          <div className='box logo'>
            <img src='../BulletinWcrop.png' alt='' />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <a href="https://mail.google.com/mail/u/0/#inbox">
            <i className='fa fa-envelope'></i>
            <span> Bulletin@gmail.com </span> <br /></a>
            <i className='fa fa-headphones'></i>
            <span> +91 60521488</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
        
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          
          <div className='box'>
            <h3>LABELS</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
          <p>
            made with <i className='fa fa-heart'></i> by ADITYA SHARMA AND TEAM
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer