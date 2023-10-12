import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos(){
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch()
    return(
       <>
        { 
        todos?.map((todo)=>(
            
            <div className='bg-gray-500 mt-5 p-2 text-white flex justify-between item-center' key = {todo.id}>
                {todo.text}
                <button
                className='bg-red-500 p-1 text-white'
                onClick={()=>dispatch(removeTodo(todo.id))}
                >
                    X
                </button>
            </div>
        ))}
       </>
    )
}