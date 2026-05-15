import { useState } from "react";

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");



    const handleSubmit = (e) => {

        e.preventDefault();

        if (!text) return;

        addTodo(text);

        setText("");
    };



    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Todo"
                value={text}
                onChange={(e) =>
                    setText(e.target.value)
                }
            />

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