import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    <div className='bg-gray-500 w-full text-3xl'>User:{userid}</div>
  )
}

export default User