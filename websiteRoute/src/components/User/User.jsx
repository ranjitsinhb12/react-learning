import React from 'react'
import {useParams} from 'react-router-dom'


export default function User(){
    const {userid} = useParams()
    return(
        <div className="bg-orange-500 w-full p-2 font-bold text-2xl">User: {userid} </div>
    )
}