import React from "react";
import PropTypes from "prop-types";

const ToDoForm = props => {
  return (
    <form onSubmit={props.handleAddToDo} className="todoForm">
      <input
        type="text"
        placeholder="...todo"
        value={props.task}
        onChange={props.handleChange}
        name="task"
      />
      <button className="btn addBtn">Add Todo</button>
    </form>
  );
};

ToDoForm.propTypes = {
  handleAddToDo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired
};

export default ToDoForm;
