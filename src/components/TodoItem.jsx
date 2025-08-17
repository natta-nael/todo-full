import React, { useState, useEffect } from "react";
import { PencilSimple, Trash } from "phosphor-react";

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  useEffect(() => {
    setDraft(todo.text);
  }, [todo.text]);

  return (
    <div>
      <div className="flex items-center justify-between gap-[16px] bg-[#F4F0EF] px-[16px] py-[24px] rounded-[16px]  text-[18px] font-[500] text-[#231B19] hover:bg-[#EFEAE9] hover:cursor-pointer transition-colors duration-200 group">
        {isEditing ? (
          <input
            className="flex-1 bg-transparent outline-none border-b border-[#E6E2E0] pb-1"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                editTodo(todo.id, draft);
                setIsEditing(false);
              }
              if (e.key === "Escape") {
                setDraft(todo.text);
                setIsEditing(false);
              }
            }}
            autoFocus
          />
        ) : (
          <span>{todo.text}</span>
        )}
        <div className="flex gap-[10px] opacity-0 group-hover:opacity-100">
          {isEditing ? (
            <>
              <button
                className="text-sm px-2 py-1 rounded-md border border-[#E6E2E0]"
                onClick={() => {
                  editTodo(todo.id, draft);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <PencilSimple
                className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200 cursor-pointer"
                size={22}
                onClick={() => setIsEditing(true)}
              />
              <Trash
                className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200 cursor-pointer"
                size={22}
                onClick={() => deleteTodo(todo.id)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
