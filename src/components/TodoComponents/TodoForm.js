import React from "react";

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

export default ToDoForm;
