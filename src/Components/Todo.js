    import { FcCheckmark } from "react-icons/fc";
    import { FcEmptyTrash } from "react-icons/fc";
    import { useState } from "react";
    function Todo() {
        const [allTodos, setTodos] = useState([]);
        const [newTitle, setNewTitle] = useState("");
        const [newDescription, setNewDescription] = useState("");

        function handleAddTodo() {
        let newTodoItem = {
        title: newTitle,
        Description: newDescription,
        };
        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setTodos(updatedTodoArr);
    }
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
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                />
            </div>

            <div className="todo-input-item">
                <button
                type="button"
                onclick={handleAddTodo}
                className="Add-Button"
                >
                Add
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
                    <FcEmptyTrash className="delete-icon" />
                    <FcCheckmark className="check-icon" />
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
