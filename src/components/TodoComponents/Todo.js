import React from "react";
import PropTypes from "prop-types";

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

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleClickToDo: PropTypes.func.isRequired
};

export default Todo;
