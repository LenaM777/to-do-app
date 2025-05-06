import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import {
  RiDeleteBin6Line,
  RiArrowDropUpFill,
  RiArrowDropDownFill,
} from "react-icons/ri";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <div className="todo-check">
        <FaCircleCheck />
      </div>
      <p>{todo.task}</p>
      <div>
        <RiDeleteBin6Line />
      </div>
      <div>
        <div>
          <RiArrowDropUpFill />
        </div>
        <div>
          <RiArrowDropDownFill />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
