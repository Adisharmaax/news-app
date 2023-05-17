import axios from "axios"
import Slider from "react-slick"
// import { ppost } from "../../../../dummyData"
import Heading from "../../../common/Heading/Heading"
import "./ppost.css"
import React, { useEffect, useState } from "react"

// copy same code of popular
const Ppost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }


    const [content, setContent] = useState([]);
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `
      https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4352875003de4b8a9a19acbef64a2840`
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
            <section className='popularPost'>
                <Heading title='Popular Posts' />
                {content.length > 0 && content[1] && (
                    <div className='content'>
                        <Slider {...settings}>
                            {content.map((val) => {
                                return (
                                    <div className='items'>
                                        <div className='box shadow'>
                                            <div className='images'>
                                                <div className='img'><a href={val.url} target="_blank">
                                                    <img src={val.urlToImage} alt='' /></a>
                                                </div>
                                                <div class='category category1'>
                                                    <span>{val.author}</span>
                                                </div>
                                            </div>
                                            <div className='text'>
                                            <a href={val.url} target="_blank">
                                                <h1 className='title'>{val.title.slice(0, 40)}...</h1></a>
                                                <div className='date'>
                                                    <i class='fas fa-calendar-days'></i>
                                                    <label>{val.publishedAt}</label>
                                                </div>
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

export default Ppost