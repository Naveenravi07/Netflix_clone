import React, { useState, useEffect } from 'react'
import { Swiper } from 'swiper'
import axios from 'axios'
import { netflixoriginals, imageUrl } from '../../constants/constants'
import './RowPost.css'
import YouTube, { YouTubePlayer } from 'react-youtube'
import config from '../../constants/config.json'
function RowPosts(props) {

    const [moviestate, setmovies] = useState([])
    const [id, setId] = useState(null)
    let [url, setUrl] = useState('')
    useEffect(() => {
        axios.get(props.url).then((res) => {
            const movies = res.data.results
            setmovies(movies)
        })
        return () => {

        }
    }, [])

    const handleMovieClick = (id) => {
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${config.api_key}&language=en-US`).then((res) => {
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
            <div className="posters">
                {
                    moviestate.map((obj, index) =>
                        <img onClick={() => handleMovieClick(obj.id)}
                            src={`${imageUrl + obj.backdrop_path}`}
                            key={index} alt="" className={props.isSmall ? 'smposter' : 'poster'} />

                    )
                }
            </div>
            <div className='ytplayer'>
                {url && <  YouTube opts={opts} videoId={url} />}
            </div>
        </div>
    )
}

export default RowPosts
