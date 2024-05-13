import { React, useRef, useState } from "react";
const ViewNote = (props) => {
  const [text, setText] = useState("");
  const ref = useRef(null);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      props.selectedNote.title + "\n" + props.selectedNote.description
    );
  };

  function textToSpeech() {
    const Speech = new SpeechSynthesisUtterance();
    const message = props.selectedNote.title + props.selectedNote.description;
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  }

  return (
    <>
      <>
        {/* Modal */}
        <div
          className="modal fade "
          id="exampleModal_2"
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
                      <b>{props.selectedNote.title}</b>
                    </p>
                  </div>
                  <div className="mb-3">
                    <p id="NoteD">{props.selectedNote.description}</p>
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
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                  onClick={textToSpeech}
                >
                  Speech My Note
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
    </>
  );
};

export default ViewNote;
