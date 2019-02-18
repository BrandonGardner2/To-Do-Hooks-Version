import React from "react";

const Todo = props => {
  return (
    <div className="todo">
      <input
        type="checkbox"
        className="todoCheck"
        onClick={e => props.handleClickToDo(e, props.todo.id)}
      />
      <p className="todoItem">{props.todo.task}</p>
    </div>
  );
};

export default Todo;
