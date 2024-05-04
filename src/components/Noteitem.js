import React, { useContext } from "react";
import notecontext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(notecontext);
  const {deletenote} = context;

  const { notes, updatenote } = props;  
  return (
    <div className="col-md-3 my-2">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{notes.title}</h5>
          <p className="card-text">
           {notes.description}
          </p>
          <i className="fa-solid fa-trash" onClick={()=>{
            deletenote(notes._id)
           }}></i>
           <i className="fa-solid fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
            updatenote(notes);
           }}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
