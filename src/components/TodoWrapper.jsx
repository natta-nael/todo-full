import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { ArrowRight } from "phosphor-react";
import TodoInput from "./TodoInput";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (!newTodo || !newTodo.trim()) return;
    const todoObj = {
      id: Date.now(),
      text: newTodo.trim(),
      isCompleted: false,
    };
    setTodos((prev) => [...prev, todoObj]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    const text = (newText || "").trim();
    if (!text) return;
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
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
        {todos.map((todo) => (
          <TodoItem
            addTodo={addTodo}
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoWrapper;
