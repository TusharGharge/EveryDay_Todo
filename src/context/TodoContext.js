import { createContext, useContext } from "react";

export const TodoList=createContext({
    todos:[
        
    {
        id:1,
        todo:"todo msg",
        completed:false,
    }
    ],

    addTodo:(todo)=>{},
    updateTodo:(todo)=>{},
    deleteTodo:(todo)=>{},
    toggleComplete:(id)=>{  }
})

export const useTodo=()=>{
    return useContext(TodoList)
}

export const TodoProvider=TodoList.Provider;