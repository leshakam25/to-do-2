import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (p) => {
    setUserInput(p.currentTarget.value);
  };

  const handleSubmit = (p) => {
    p.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (p) => {
    if (p.key === "Enter") {
      handleSubmit(p);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Input for you"
      />
      <button>SAVE</button>
    </form>
  );
}
export default ToDoForm;
