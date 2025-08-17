import React from "react";
import { PencilSimple, Trash } from "phosphor-react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-[16px] bg-[#F4F0EF] px-[16px] py-[24px] rounded-[16px]  text-[18px] font-[500] text-[#231B19] hover:bg-[#EFEAE9] hover:cursor-pointer transition-colors duration-200 group">
        {todo}

        <div className="flex gap-[6px] opacity-0 group-hover:opacity-100">
          <PencilSimple
            className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200"
            size={22}
          />
          <Trash
            className="text-[#C8BFBD] hover:text-[#231B19] transition-colors duration-200"
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
