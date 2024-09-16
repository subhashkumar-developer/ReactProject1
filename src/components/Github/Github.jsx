import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary').then(Response=>Response.json()).then(data=>{console.log(data);setData(data)})
    },[])
  return (
    <div className='bg-gray-500 text-3xl p-4 text-white text-center'>Github Followers:{data.followers}</div>
  )
}

export default Github