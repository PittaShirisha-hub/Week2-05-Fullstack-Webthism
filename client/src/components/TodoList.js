import { useState } from "react";

function TodoList({ todos, deleteTodo, editTodo }) {

    const [editingId, setEditingId] = useState(null);

    const [editText, setEditText] = useState("");



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

                                        <button
                                            className="save-btn"
                                            onClick={() => {

                                                editTodo(
                                                    todo._id,
                                                    editText
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

                                        <button
                                            className="edit-btn"
                                            onClick={() => {

                                                setEditingId(todo._id);

                                                setEditText(todo.text);
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