import { useEffect, useState } from "react";

import API from "./services/api";

import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";



function App() {

    const [todos, setTodos] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    // FETCH TODOS
    const fetchTodos = async () => {

        try {

            setLoading(true);

            const res = await API.get("/");

            setTodos(res.data);

            setLoading(false);

        } catch (error) {

            setError("Failed to fetch todos");

            setLoading(false);

        }
    };



    // ADD TODO
    const addTodo = async (text) => {

        try {

            await API.post("/", { text });

            fetchTodos();

        } catch (error) {

            setError("Failed to add todo");

        }
    };



    // DELETE TODO
    const deleteTodo = async (id) => {

        try {

            await API.delete(`/${id}`);

            fetchTodos();

        } catch (error) {

            setError("Failed to delete todo");

        }
    };



    // EDIT TODO
    const editTodo = async (id, updatedText) => {

        try {

            await API.put(`/${id}`, {
                text: updatedText
            });

            fetchTodos();

        } catch (error) {

            setError("Failed to update todo");
        }
    };



    useEffect(() => {

        fetchTodos();

    }, []);




    return (

        <div className="app">

            <h1>Todo App</h1>

            {error && (
                <p className="error">
                    {error}
                </p>
            )}

            <TodoForm addTodo={addTodo} />

            {
                loading ? (

                    <p className="loading">
                        Loading...
                    </p>

                ) : (

                    <TodoList
                        todos={todos}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            }

        </div>
    );
}

export default App;