import React, { useState } from 'react'
import { useContext } from 'react';
import notecontext from "../context/notes/noteContext";

const Addnote = () => {
    const context = useContext(notecontext);
    const {addnote}= context;
    const [note, setnote] = useState({title: "", description: "", tag: ""});
    const handleclick = ()=>{
    addnote(note.title, note.description, note.tag);  
    }

    const onchange = (e)=>{
    setnote({...note, [e.target.name]: e.target.value})
    }

  return (
    
      <div className="container my-3">
      <h3 className="my-3">Add a Note</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            placeholder="Title"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name='description'
            placeholder="Description"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name='tag'
            placeholder="tag"
            onChange={onchange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleclick}>Add Note</button>
        </div>
    
  )
}

export default Addnote
