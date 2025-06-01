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
    <header className="pb-2 pt-4 px-4 max-w-[700px]  mx-auto">
      <h1 className="text-2xl font-bold font-serif ">Notes App</h1>
      <form onSubmit={(e) => submitForm(e)} className="flex gap-2 my-2 h-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="enter text"
          className="border px-2 flex-1 rounded-xl"
        />
        <button className="bg-neutral-800 text-white font-semibold px-4 rounded-xl hover:cursor-pointer">
          add
        </button>
      </form>
    </header>
  );
}

export default AddNote;
