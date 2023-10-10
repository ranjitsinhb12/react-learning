import {createSlice, nanoid} from '@reduxjs/toolkit'

/// initial state
const initialState = {
    todos: [{id: 1, text: "First Todo", completed: false}]
}
/// create slice
export const todoSlice = createSlice({

    name: 'todo',
    initialState,

    /// all reducer
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }

})

/// individual reducer export
export const {addTodo, removeTodo} = todoSlice.actions

//// export all reducer
export default todoSlice.reducer
