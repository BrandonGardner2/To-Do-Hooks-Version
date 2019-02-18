import React, { useState, useEffect } from "react";
import "./index.css";

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const App = () => {
  //Important functions for loading the page and leaving the page. These decide initial and final data.
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const hydrateState = () => {
    let value;
    if (localStorage.hasOwnProperty("todos")) {
      value = localStorage.getItem("todos");
      try {
        value = JSON.parse(value);
      } catch (e) {
        value = [];
      }
    }

    return value;
  };

  //Get initial Todos from local storage and create an effect to save to local storage on each re-render
  const [todos, setTodos] = useState(hydrateState());
  useEffect(() => {
    saveToLocalStorage();
    window.removeEventListener("beforeunload", saveToLocalStorage);
  });

  //Task is the input field. Initially empty
  const [task, setTask] = useState("");

  //General clear input field function.
  const clearForm = () => {
    setTask("");
  };

  //Update task state with value currently typed into the input
  const handleChange = e => {
    setTask(e.target.value);
  };

  //Handle form submission to add a new todo
  const handleAddToDo = e => {
    e.preventDefault();
    if (task !== "") {
      const newTodo = {
        task: task,
        id: Date.now(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      clearForm();
    }
  };

  //Mark todo complete on click and apply styling
  const handleClickToDo = (e, id) => {
    e.target.parentElement.classList.toggle("complete");
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  //Filter out the todos that have been clicked on as complete
  const handleCompleteTasks = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="appContainer">
      <h2>To Do Application</h2>

      <div className="container">
        <section className="ctas">
          <TodoForm
            handleAddToDo={handleAddToDo}
            handleChange={handleChange}
            task={task}
          />

          <button className="btn completeBtn" onClick={handleCompleteTasks}>
            Complete Tasks
          </button>
        </section>

        <section className="list">
          <TodoList
            handleClickToDo={handleClickToDo}
            handleCompleteTasks={handleCompleteTasks}
            todos={todos}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
