import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        title: '',
        content: '',
        featuredimage: '',
        userid: '',
        status: ''
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        addPost: (state, action) => {
                state.title = action.payload.title,
                state.content = action.payload.content,
                state.featuredimage = action.payload.featuredimage,
                state.userid = action.payload,
                state.status = action.payload
        },

        updatePost: (state, action) =>{
            state.title = action.payload.title,
            state.content = action.payload.content,
            state.featuredimage = action.payload.featuredimage,
            state.userid = action.payload,
            state.status = action.payload
        }
    }
})

export const {addPost} = postSlice.actions

export default postSlice.reducer