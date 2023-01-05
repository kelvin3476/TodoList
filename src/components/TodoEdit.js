import React, { useState, useEffect, useCallback } from 'react';
import './TodoEdit.css';

const TodoEdit = ({insertToggle, selectedTodo, onUpdate}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const onSubmit = useCallback((event) => {
        onUpdate(selectedTodo.id, value);
        setValue(''); //value 초기화
        event.preventDefault(); //기본이벤트 (새로고침) 방지
    }, [selectedTodo.id, onUpdate, value]);

    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
      <div className="background">
        <form onSubmit={onSubmit} className="todoedit__insert">
          <h2 className="h2">수정하기</h2>
          <input
            className="input"
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력하세요"
          />
          <button className='button' type="submit">수정하기</button>
        </form>
      </div>
    );
};

export default TodoEdit;