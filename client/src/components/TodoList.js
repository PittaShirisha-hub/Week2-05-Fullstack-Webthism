import { useState } from "react";

function TodoList({ todos, deleteTodo, editTodo }) {

    const [editingId, setEditingId] = useState(null);

    const [editText, setEditText] = useState("");

    const [editPriority, setEditPriority] = useState("Low");



    return (

        <div>

            {
                todos.length === 0 ? (

                    <p>No Todos Found</p>

                ) : (

                    todos.map((todo) => (

                        <div
                            className="todo-card"
                            key={todo._id}
                        >

                            {
                                editingId === todo._id ? (

                                    <div>

                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) =>
                                                setEditText(e.target.value)
                                            }
                                        />



                                        <select
                                            value={editPriority}
                                            onChange={(e) =>
                                                setEditPriority(
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option value="High">
                                                High
                                            </option>

                                            <option value="Medium">
                                                Medium
                                            </option>

                                            <option value="Low">
                                                Low
                                            </option>

                                        </select>



                                        <button
                                            className="save-btn"
                                            onClick={() => {

                                                editTodo(
                                                    todo._id,
                                                    editText,
                                                    editPriority
                                                );

                                                setEditingId(null);
                                            }}
                                        >
                                            Save
                                        </button>

                                    </div>

                                ) : (

                                    <div>

                                        <p className="todo-text">
                                            {todo.text}
                                        </p>



                                        <p>

                                            Priority:

                                            <span
                                                style={{
                                                    color:
                                                        todo.priority === "High"
                                                            ? "red"
                                                            : todo.priority === "Medium"
                                                            ? "orange"
                                                            : "green",

                                                    fontWeight: "bold",

                                                    marginLeft: "5px"
                                                }}
                                            >
                                                {todo.priority}
                                            </span>

                                        </p>



                                        <button
                                            className="edit-btn"
                                            onClick={() => {

                                                setEditingId(todo._id);

                                                setEditText(todo.text);

                                                setEditPriority(
                                                    todo.priority
                                                );
                                            }}
                                        >
                                            Edit
                                        </button>



                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteTodo(todo._id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>
                                )
                            }

                        </div>
                    ))
                )
            }

        </div>
    );
}

export default TodoList;