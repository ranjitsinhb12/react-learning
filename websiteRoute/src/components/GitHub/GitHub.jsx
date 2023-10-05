import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ranjitsinhb12')
    //     .then((res) => res.json())
    //     .then(data => {
    //         setData(data)

    //     })
    // }, [])
    return (
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl flex">
            <div><img src = {data.avatar_url} alt="Ranjitsinh Chauhan"  width ="300"/></div>
            <div className='p-4 m-4'>
                GitHub Followers: {data.followers}<br />
                Created: {data.created_at}<br />
                Updated: {data.updated_at}
            </div>
           
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/ranjitsinhb12')
    return res.json()
}