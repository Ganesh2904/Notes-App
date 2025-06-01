import { useContext } from "react";
import Note from "./Note";
import { Context } from "../context/datacontext";

function NotesList() {
  const { data } = useContext(Context);

  return (
    <div className="px-4">
      {data.map((item, index) => {
        return <Note text={item.text} id={item.id} key={index} />;
      })}
    </div>
  );
}

export default NotesList;
