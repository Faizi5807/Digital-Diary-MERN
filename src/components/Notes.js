import { React, useEffect, useRef, useState } from "react";
import notecontext from "../context/notes/noteContext";
import { useContext } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const context = useContext(notecontext);
  let navigate = useNavigate();
  const { notes, getallnotes, editnote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getallnotes();
    } else {
      navigate("/login");
    }
  }, []);
  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const ref = useRef(null);
  const updatenote = (currentnote) => {
    ref.current.click();
    setnote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
  };
  const handleclick = () => {
    // console.log("handle click");
    editnote(note.id, note.etitle, note.edescription, note.etag);
    // getallnotes();
  };

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Addnote />
      <>
        {/* Modal */}
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          ref={ref}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="conatiner my-3">
                  <div className="mb-3">
                    <label
                      htmlFor="etitle"
                      className="form-label"
                      style={{
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                    >
                      Title
                    </label>
                    <input
                      style={{
                        backgroundColor:
                          props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      placeholder="Title"
                      onChange={onchange}
                      value={note.etitle}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      style={{
                        backgroundColor:
                          props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      placeholder="Description"
                      onChange={onchange}
                      value={note.edescription}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      style={{
                        backgroundColor:
                          props.mode === "dark" ? "black" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                      }}
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      placeholder="tag"
                      onChange={onchange}
                      value={note.etag}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleclick}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="row my-3">
        <h3>Your Notes</h3>
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updatenote={updatenote} notes={notes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
