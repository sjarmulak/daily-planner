import React, { useState } from "react";
import "../scss/Notes.scss";

export default function Notes() {
  const [myNotes, setMyNotes] = useState("");

  const saveNotes = (e) => {
    setMyNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  return (
    <div className="Notes">
      <div className="notepad">
        <span>my notes:</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={localStorage.notes}
          onKeyPress={saveNotes}
          onChange={saveNotes}
        ></textarea>
      </div>
    </div>
  );
}
