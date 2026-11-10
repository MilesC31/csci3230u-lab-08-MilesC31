import TodoList from "./TodoList.jsx";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";

const INITIAL_TODOS = [
  { id: 1, text: "Read the lab README", done: true },
  { id: 2, text: "Build the to-do list", done: false },
  { id: 3, text: "Add one of your own", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  
  // pasted lab code
  const [filter, setFilter] = useState("all");
  const visible = todos.filter((t) =>
    filter === "active" ? !t.done : filter === "completed" ? t.done : true,
  );
  // render three buttons (All/Active/Completed) that setFilter; pass `visible` to <TodoList>
  // pasted lab code

  // Derived from todos on every render - not stored in its own state
  const doneCount = todos.filter((todo) => todo.done).length;
  
  // Step 2: write these handlers. They must NOT mutate state - build a NEW
  // array each time (spread / map / filter) and pass it to setTodos:
  //   addTodo(text)   → append { id, text, done: false }  (give it a fresh id)
  //   toggleTodo(id)  → flip `done` on the matching todo
  //   deleteTodo(id)  → drop the matching todo
  // Then pass them as props to the components below.

function addTodo(text) {
  const newTodo = { id: Date.now(), text, done: false };
  setTodos([...todos, newTodo]);  
} // adds newTodo onto a new copied array of old Todos

function toggleTodo(id) {
  setTodos(
    todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
  );  // if id is found, flips the id to done in a new array
}

function deleteTodo(id) {
  setTodos(todos.filter((todo) => todo.id !== id));
} // removes matching todo, returns new array

  return (
    <main className="app">
      {/* Step 3: <AddTodoForm onAdd={addTodo} /> */}
      <h1>My To-Dos</h1>
      <AddTodoForm onAdd={addTodo}/>

      <div className="filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
        All
        </button>
        <button className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>
        Active
        </button>
        <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
        Completed
        </button>
      </div>

      {/* Step 4: a derived count - "{done} of {total} done" computed from todos */}
      <TodoList todos={visible} onToggle={toggleTodo} onDelete={deleteTodo} />  
      <p className="count">
        {doneCount} of {todos.length} done
      </p>
    </main>
  );
}
