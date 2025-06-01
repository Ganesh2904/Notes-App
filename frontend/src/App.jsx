import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { Context } from "./context/datacontext";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5500/notes")
      .then((response) => response.json())
      .then((result) => setData(result.reverse()));
  }, []);

  return (
    <div>
      <Context.Provider value={{ data, setData }}>
        <AddNote />
        <NotesList />
      </Context.Provider>
    </div>
  );
}

export default App;
