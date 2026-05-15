const express = require("express");

const router = express.Router();

const {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");



// GET TODOS
router.get("/", getTodos);


// ADD TODO
router.post("/", addTodo);


// UPDATE TODO
router.put("/:id", updateTodo);


// DELETE TODO
router.delete("/:id", deleteTodo);



module.exports = router;