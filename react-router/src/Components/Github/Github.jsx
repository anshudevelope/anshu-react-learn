import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {

    const data = useLoaderData()

  
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/anshudevelope')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])


    return (
        <div className='text-center text-3xl bg-gray-600 m-5 p-4 text-white'>
            Github Followers: {data.followers}

            <img src={data.avatar_url} alt='Github' width={300}></img>
        </div>
    )
}

export default Github

export const githubInfoLoadre = async () => {
    const response = await fetch('https://api.github.com/users/anshudevelope')
    return response.json()
}