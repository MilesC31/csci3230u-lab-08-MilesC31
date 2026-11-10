import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault(); // prevents page refreshing
    const trimmed = text.trim();
    if (!trimmed) return; // prevents blank todos
    onAdd(trimmed);
    setText("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a todo..."/>
      <button type="submit">Add</button>
    </form>
  );
}
