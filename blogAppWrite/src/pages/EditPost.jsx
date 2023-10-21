import React, {useEffect, useState}from 'react'
import {Container, PostForm} from '../components'
import databaseService from '../appwrite/databaseService'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(slug){
            databaseService.getPost(slug)
            .then((post)=>{
                setPost(post)
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])
    return (
       post? (
        <div className='py-8'>
            <PostForm post={post} />
        </div>
       ) : null 
    )
}

export default EditPost
