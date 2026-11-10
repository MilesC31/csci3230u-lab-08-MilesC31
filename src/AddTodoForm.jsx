import { useState } from "react"; //importing react
// AI-assisted — see AI-USAGE.md #1
export default function AddTodoForm({ onAdd }) { 
  const [text, setText] = useState(""); // stores whats in the input
  function handleSubmit(event) { // the function
    event.preventDefault(); // prevents page refreshing
    const trimmed = text.trim(); //'trims' the text the user inputted, removing the spaces before and after the entry
    if (!trimmed) return; // prevents blank todos
    onAdd(trimmed); // adds trimmed element
    setText(""); // empties entry box
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input 
        value={text} // displays the current state in the box
        onChange={(e) => setText(e.target.value)} // updates state as the enters text into box
        placeholder="Add a todo..." // placeholder text when box is empty
      />
      <button type="submit">Add</button>
    </form>
  );
}
