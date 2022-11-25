import React, { useState, useEffect } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import axios from 'axios'
import { netflixoriginals, imageUrl } from '../../constants/constants'
import './RowPost.css'
import YouTube, { YouTubePlayer } from 'react-youtube'
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { api_key } from '../../constants/constants'
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RowPosts(props) {

    const [moviestate, setmovies] = useState([])
    const [id, setId] = useState(null)
    let [url, setUrl] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res) => {
            const movies =  res.data.results.slice(0, -10);
            console.log(res);
            setmovies(movies)
        })
        return () => {

        }
    }, [])

    const handleMovieClick = (id) => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((res) => {
            let vid = res.data.results[0]
            let key = vid.key
            console.log(key);
            setUrl(key)
        })
        setId(id)
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h2 className='rowtitle'> {props.title}</h2>
            <Swiper
             slidesPerView={props.isSmall?6:4}
             centeredSlides={false}
             slidesPerGroupSkip={1}
             grabCursor={true}
             keyboard={{
               enabled: true,
             }}
             breakpoints={{
               769: {
                 slidesPerView: props.isSmall?6:4,
                 slidesPerGroup: 2,
               },
               200:{
                slidesPerView: props.isSmall?2:1,
                slidesPerGroup: 2,
               }
             }}
             scrollbar={true}
             pagination={{
               clickable: true,
             }}
             modules={[Keyboard, Scrollbar, Navigation, Pagination]}     
            className="posters mySwiper">
                {
                    moviestate.map((obj, index) =>
                  
                           <SwiperSlide>
                           <img onClick={() => handleMovieClick(obj.id)}
                            src={`${imageUrl + obj.backdrop_path}`}
                            key={index} alt="" className={props.isSmall ? 'smposter' : 'poster'} />
                           </SwiperSlide> 

                    )
                }
            </Swiper>
            <div className='ytplayer'>
                {url && <  YouTube opts={opts} videoId={url} />}
            </div>
        </div>
    )
}

export default RowPosts
