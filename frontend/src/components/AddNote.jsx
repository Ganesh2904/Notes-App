import { useState, useContext } from "react";
import { Context } from "../context/datacontext";

function AddNote() {
  const { data, setData } = useContext(Context);
  const [input, setInput] = useState("");
  function submitForm(e) {
    e.preventDefault();
    if (!input) return alert("input should not empty");

    const id = Date.now();

    fetch("http://127.0.0.1:5500/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input, id: id }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result == "success") {
          setData([{ text: input, id: id }, ...data]);
          setInput("");
        } else alert("Error To Add Note");
      });
  }
  return (
    <header className="py-2 px-4">
      <h1 className="text-2xl">Notes App</h1>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="enter text"
          className="border px-2 my-2 mr-4"
        />
        <button className="border px-2">add</button>
      </form>
    </header>
  );
}

export default AddNote;
