import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onDel, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
    return (
      <ul className="TodoList">
        {todos.map((todos) => (
          <TodoItem
            key={todos.id}
            todos={todos}
            onDel={onDel}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        ))}
      </ul>
    );
};

export default TodoList;