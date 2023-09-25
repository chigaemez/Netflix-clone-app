import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  const fetchMovieDate = async () => {
    const response = await axios.get(requests.requestPopular)
    setMovies(response.data.results)
  }
  useEffect(() => {
    fetchMovieDate()
  }, [])

  const trunCateString = (str, num) => {
    if(str?.length > num){
        return str.slice(0, num) + '...'
    }
  }

  return (
    <div className='w-full h-[650px] text-white '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[650px] bg-gradient-to-r from-black'></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className='w-full h-full object-cover'
        />
        <div className=' absolute top-[20%] w-full p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border first-letter text-black bg-white py-2 px-5'>
              Play
            </button>
            <button className='border first-letter text-white bg-black py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400  text-lg'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{trunCateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
