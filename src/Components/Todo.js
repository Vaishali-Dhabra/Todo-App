import { FcEmptyTrash } from "react-icons/fc";
import React, { useEffect, useState } from "react";
function Todo() {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      Description: newDescription,
    };
    if (newTodoItem) {
      let updatedTodoArray = [...allTodos];
      updatedTodoArray.push(newTodoItem);
      setTodos(updatedTodoArray);
      localStorage.setItem("todolist", JSON.stringify(updatedTodoArray));
    }
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleDeleteAllTodo = () => {
    if (
      setTodos.length > 0 &&
      window.confirm("Do you want to delete all task ?")
    ) {
      setTodos([]);
    }
  };
  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo) {
      setTodos(savedTodo);
    }
  }, []);
  return (
    <div className="Todo">
      <h1>My Todo List</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              placeholder="Task's Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              placeholder="Task's Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button
              type="button"
              onClick={handleAddTodo}
              className="Add-Button"
            >
              Add
            </button>

            <button
              type="button"
              onClick={handleDeleteAllTodo}
              className="Delete-Button"
            >
              Delete All
            </button>
          </div>
        </div>
        <div className="todo-list">
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                </div>
                <div className="icons">
                  <FcEmptyTrash
                    className="delete-icon"
                    onClick={() => handleDeleteTodo(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
