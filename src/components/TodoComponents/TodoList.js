import React from "react";
import "./Todo.css";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todoList">
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleClickToDo={props.handleClickToDo}
        />
      ))}
    </div>
  );
};

export default TodoList;
