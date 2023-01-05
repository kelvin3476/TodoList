import React, { useRef, useState } from "react";
import "./TodoInsert.css";

const TodoInsert = ({ onInsert }) => {
  const textRef = useRef();
  const [text, setText] = useState("");

  const changeInput = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지

    if (!text) return; //공백 입력 방지

    onInsert(text);

    setText("");
    textRef.current.focus();
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할일을 작성해주세요."
        value={text}
        onChange={changeInput}
        ref={textRef}
      />
      <button type="submit">입력</button>
    </form>
  );
};

export default TodoInsert;
