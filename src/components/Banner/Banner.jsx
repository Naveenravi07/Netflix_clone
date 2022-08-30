import React, { useState, useEffect } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
  const [movie, Setmovie] = useState("")

  useEffect(() => {
    axios.get('/movie/popular?api_key=' + API_KEY).then((response) => {
      let movie1 = response.data.results[0]
      Setmovie(movie1)
    })
  }, [])

  return (
    <div className='container'>
      <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
        <div className="content">
          <h1 className='bannerh1'> {movie ? movie.title : ""}</h1>
          <div className='btnslist'>
            <button className='button'>Play  <span className="material-symbols-outlined playbtn">
              play_circle
            </span>
            </button>
            <button className='button'> My List
              <span className="material-symbols-outlined playbtn">
                add_circle
              </span>
            </button>
          </div>
          <p className='bannerdesc'> {movie ? movie.overview : ""}
          </p>
        </div>
      </div>
      <div className="effects"></div>
    </div>
  )
}

export default Banner
