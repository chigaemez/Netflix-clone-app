import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../Firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Movie = ({ item }) => {
  const [saved, setSeved] = useState(false)
  const [like, setLike] = useState(false)
  const { user } = UserAuth()

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSeved(true)
      await updateDoc(movieID, {
        savedMovie: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${item.title} saved successfull`,
        showConfirmButton: false,
        timer: 2500,
        background:'black',
        color:'white'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Fail...',
        text: 'Log in to save this video',
        
      })
    }
  }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='whitespace-normal text-sm md:text-base font-bold flex items-center justify-center h-full text-center'>
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  )
}

export default Movie
