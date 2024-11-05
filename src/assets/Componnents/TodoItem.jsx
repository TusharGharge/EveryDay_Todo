import { useContext, useState } from "react";
import { useTodo } from "../../context";

function TodoItem({ todo }) {
  const [isTodoEditable,setIsTodoEditable]=useState("");
  const [todoMsg,setTodoMsg]=useState(todo.todo);
  const {updateTodo,deleteTodo,toggleComplete}=useTodo();
  const editTodo=()=>{
    updateTodo(todo.id,{...todo,todo: todoMsg}
    )
    setIsTodoEditable(false);

  }

  const toggleCompleted=()=>{
    toggleComplete(todo.id);
  }


  

  
  function formatDateTime() {
    const now = new Date();
  
    const day = now.getDate().toString().padStart(2, '0'); // Ensure 2 digits for day
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits for month (months are 0-indexed)
    const year = now.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const hours = now.getHours().toString().padStart(2, '0'); // Ensure 2 digits for hours
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensure 2 digits for minutes
  
    // Return formatted string: d-mm-yy hr.min
    return `${day}-${month}-${year}`;
  }
    

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-3" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
         <p className="font-bold w-00px] pt-1">{formatDateTime()}</p>
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
