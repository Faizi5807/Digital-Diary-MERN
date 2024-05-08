import React, { useState } from "react";
import { useContext } from "react";
import notecontext from "../context/notes/noteContext";

const Addnote = (props) => {
  const context = useContext(notecontext);
  const { addnote } = context;
  const [text, setText] = useState("");
  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const handleclick = () => {
    addnote(note.title, note.description, note.tag);
  };

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // isCopied("Copied to Clipboard")
    // setTimeout(() => {
    //     isCopied("Copy Text")
    // }, 1200);
  };
  const HOC = (e) => {
    setText(e.target.value);
  };
  const refresh = () => {
    setText("");
  };

  return (
    <div
      className="container my-3"
      style={{
        backgroundColor: props.mode === "dark" ? "white" : "black",

        border: props.mode === "dark" ? "1px solid white" : "1px solid black",
        width: "40%",
        height: "70%",
        margin: "auto",
        borderRadius: "10px",
        paddingBottom: "15px",
      }}
    >
      <h3
        className="my-3"
        style={{
          color: props.mode === "dark" ? "black" : "white",
        }}
      >
        Add a Note
      </h3>
      <div className="mb-3">
        <label
          htmlFor="title"
          className="form-label"
          style={{
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          Title
        </label>
        <input
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Title"
          onChange={onchange}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="description"
          className="form-label"
          style={{
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          Description
        </label>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Description"
          onChange={HOC}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="tag"
          className="form-label"
          style={{
            color: props.mode === "dark" ? "black" : "white",
          }}
        >
          Tag
        </label>
        <input
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          placeholder="tag"
          onChange={onchange}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="button" className="btn btn-primary" onClick={handleclick}>
          Add Note
        </button>
        <button type="button" className="btn btn-danger" onClick={refresh}>
          Clear Description
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleCopyClick}
        >
          Copy Note
        </button>
      </div>
    </div>
  );
};

export default Addnote;
