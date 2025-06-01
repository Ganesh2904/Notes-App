import { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import { Context } from "./context/datacontext";

function App() {
  const [data, setData] = useState([]);
  // data stores the data of notes - all over the app with context api

  useEffect(() => {
    // initially fetching the notes data from backend
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
