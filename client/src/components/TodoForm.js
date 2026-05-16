import { useState } from "react";

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    const [priority, setPriority] = useState("Low");



    const handleSubmit = (e) => {

        e.preventDefault();

        if (!text) return;

        addTodo(text, priority);

        setText("");

        setPriority("Low");
    };



    return (

        <form
            className="todo-form"
            onSubmit={handleSubmit}
        >

            <input
                type="text"
                placeholder="Enter Todo"
                value={text}
                onChange={(e) =>
                    setText(e.target.value)
                }
            />



            <select
                value={priority}
                onChange={(e) =>
                    setPriority(e.target.value)
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
                className="add-btn"
                type="submit"
            >
                Add
            </button>

        </form>
    );
}

export default TodoForm;