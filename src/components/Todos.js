import React, { useCallback, useRef, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false); //플래그 역할을 해줄 state
  
  const nextId = useRef(1);

  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todos) => {
    setSelectedTodo((selectedTodo) => todos);
  };

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //concat():인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 변환
    nextId.current++; //nextId 1씩 더하기
  }, []);

  const onDel = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
      );
    },
    [onInsertToggle]
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <div className="Todos">
      <h1>Todo List</h1>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onDel={onDel}
        onToggle={onToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && (
        <TodoEdit
          onInsert={onInsert}
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onUpdate={onUpdate}
          insertToggle={insertToggle}
        />
      )}
    </div>
  );
};

export default Todos;
