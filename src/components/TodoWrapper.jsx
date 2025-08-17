import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { ArrowRight } from "phosphor-react";
import TodoInput from "./TodoInput";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo || !newTodo.trim()) return;
    setTodos((prev) => [...prev, newTodo.trim()]);
  };

  return (
    <div className="w-[390px] h-[840px] bg-[#FDF9F6] rounded-3xl px-[20px]">
      {/* header group */}
      <div className="flex flex-col gap-2 pt-[40px]">
        <h2 className="text-black">Today</h2>
        <p className="text-light">Sat, 2 Aug, 2025</p>
      </div>

      {/* input field */}
      <TodoInput addTodo={addTodo} />

      {/* input todo */}
      <div className="flex flex-col gap-[10px] mt-[40px]">
        {todos.map((todo, i) => (
          <TodoItem addTodo={addTodo} key={i} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoWrapper;
