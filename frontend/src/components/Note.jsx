import { useContext } from "react";
import { Context } from "../context/datacontext";

function Note({ text, id }) {
  const { setData, data } = useContext(Context);
  function deleteNote() {
    fetch("http://127.0.0.1:5500/notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result == "success") {
          console.log(data);
          setData(data.filter((item) => item.id != id));
        } else alert("error deleting");
      });
  }
  return (
    <div className="py-2 bg-neutral-100 rounded-xl border border-neutral-300 flex items-center justify-between px-4">
      {text}
      <button onClick={deleteNote} className=" bg-rose-300 ml-4 px-2 rounded-xl h-8 hover:cursor-pointer hover:bg-rose-400">
        delete
      </button>
    </div>
  );
}

export default Note;
