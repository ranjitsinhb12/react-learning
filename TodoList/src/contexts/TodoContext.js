import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todoMsg: "First Msg",
        checked: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    checkedComplete: (id) => {}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider