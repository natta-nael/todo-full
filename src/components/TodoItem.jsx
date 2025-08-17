import React, { useState, useEffect } from "react";
import { PencilSimple, Trash } from "phosphor-react";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  useEffect(() => {
    setDraft(todo.text);
  });

  return (
    <div>
      <div className="flex items-center justify-between gap-[16px] bg-[#F4F0EF] px-[16px] py-[24px] rounded-[16px]  text-[18px] font-[500] text-[#231B19] hover:bg-[#EFEAE9] hover:cursor-pointer transition-colors duration-200 group">
        {todo.text}

        <div className="flex gap-[10px] opacity-0 group-hover:opacity-100">
          <PencilSimple
            className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200"
            size={22}
            onClick={() => editTodo(todo.id, newText)}
          />
          <Trash
            className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200"
            size={22}
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
