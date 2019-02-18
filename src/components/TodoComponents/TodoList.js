import React from "react";
import PropTypes from "prop-types";
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

TodoList.propTypes = {
  handleClickToDo: PropTypes.func.isRequired,
  handleCompleteTasks: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object)
};

export default TodoList;
