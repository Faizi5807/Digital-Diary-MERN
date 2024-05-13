import React, { useState } from "react";
import Notes from "../components/Notes";
import ViewNote from "../components/ViewNote";
const Home = () => {
  const [editMode, setEditMode] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null); // Store the note being edited

  const handleEditNote = (note) => {
    setEditMode(true); // Set edit mode to true
    setNoteToEdit(note); // Set the note to edit
  };

  const handleCancelEdit = () => {
    setEditMode(false); // Exit edit mode
    setNoteToEdit(null); // Clear the note being edited
  };

  return (
    <div>
      {/* Conditional rendering based on edit mode */}
      {editMode ? (
        <ViewNote note={noteToEdit} onCancelEdit={handleCancelEdit} />
      ) : (
        <Notes onEditNote={handleEditNote} />
      )}
    </div>
  );
};

export default Home;
