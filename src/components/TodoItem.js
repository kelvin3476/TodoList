import React from "react";
import Todotimer from "./Todotimer";

const TodoItem = ({
  todos,
  onDel,
  onToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todos;

  return (
    <div>
      <li className={checked ? "on" : ""}>
        <span onClick={() => onToggle(id)}>
          <input type="checkbox" />
        </span>
        <em className="date" onClick={() => onToggle(id)}>{text}</em>
        <button className="delete" type="submit" onClick={() => onDel(id)}>
          삭제
        </button>
        <button
          className="edit"
          type="submit"
          onClick={() => {
              onChangeSelectedTodo(todos);
              onInsertToggle();
            }}
        >
          수정
        </button>
        <div>
        <Todotimer />
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
