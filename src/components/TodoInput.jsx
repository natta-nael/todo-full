import React, { useState } from "react";
import { ArrowRight } from "phosphor-react";

const TodoInput = ({ addTodo }) => {
  const [todoEntry, setTodoEntry] = useState("");

  const handleClick = () => {
    addTodo(todoEntry);
    setTodoEntry("");
  };

  return (
    <div>
      <div className="flex flex-row gap-[16px] pt-[40px]">
        <input
          type="text"
          placeholder="What do you want to do?"
          className="basis-full no-border"
          value={todoEntry}
          onChange={(e) => setTodoEntry(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClick();
            }
          }}
        />
        <button type="submit" onClick={handleClick}>
          <ArrowRight className="w-[28px] h-[28px] text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
