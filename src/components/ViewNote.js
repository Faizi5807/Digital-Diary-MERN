import { React, useEffect, useRef, useState } from "react";
import notecontext from "../context/notes/noteContext";
import { useContext } from "react";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";
import { useNavigate } from "react-router-dom";
const ViewNote = (props) => {
  const context = useContext(notecontext);
  let navigate = useNavigate();
  const { notes, getallnotes } = context;
  const [text, setText] = useState("");
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
  const viewnote = (currentnote) => {
    ref.current.click();
    setnote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // isCopied("Copied to Clipboard")
    // setTimeout(() => {
    //     isCopied("Copy Text")
    // }, 1200);
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
                <h2>Your Note</h2>
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
                    <p>
                      <b>{note.etitle}</b>
                    </p>
                  </div>
                  <div className="mb-3">
                    <p value={text}>{note.edescription}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={handleCopyClick}
                >
                  Copy
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="row my-3">
        <h3>Your Notes</h3>

        {notes.map((notes) => {
          return <Noteitem key={notes._id} viewnote={viewnote} notes={notes} />;
        })}
      </div>
    </>
  );
};

export default ViewNote;
