import React, {useEffect, useState} from 'react'
import databaseService from '../appwrite/databaseService'
import { Container, PostCard, Login } from '../components'
import { useSelector } from 'react-redux'

function Home() {
    const authStatus = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])
   
    useEffect(()=>{
        databaseService.getPosts()
        .then((posts)=>{
             if(posts){
                 setPosts(posts.documents)
             }
        }) 
     },[])
     
    if(!authStatus){
        return(
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                          <Login />  
                    </div>
                </Container>
            </div>
        )
    }
   

    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                      {posts.map((posts)=>(
                        <div key={posts.$id} className='p-2 w-1/4'>
                            <PostCard {...posts} />
                        </div>    
                      ))}     
                </div>
            </Container>
        </div>
    )
}


export default Home
