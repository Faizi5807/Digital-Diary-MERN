import React from "react";
import notecontext from "./noteContext";
import { useState } from "react";

const Notestate = (props)=>{
  
    const notesinitial = [];
    const [notes, setNotes]= useState(notesinitial);

    const getallnotes = async ()=>{
      // console.log("adding a new note");
      const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`,{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        }
      });
      const json = await response.json();
      // console.log(json);
      setNotes(json);
     
    }
    // const [state, setState] = useState(s1);
    // const update = ()=>{
    //   setTimeout(() => {
    //     setState({
    //       "name":"Arslan",
    //     })
    //   }, 2000);
    // }
    
    // Add a note
    const addnote = async (title, description, tag)=>{
      // console.log("adding a new note");
      const response = await fetch(`http://localhost:5000/api/notes/addnote`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag})

      });
      const json =  response.json();
      console.log(json);
    let note = {
      "_id": "65a8f2ead13fcd06da89e989",
      "user": "65a7b738703346683ece8904",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-01-18T09:44:10.839Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
    }

    //delete a note
    const deletenote = async (id)=>{
      //API Call
      const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },

      });
      const json =  response.json();
      console.log(json);
      const newnotes = notes.filter((note)=>{
        return note._id !== id
      })
      setNotes(newnotes);
    
    }

    //edit a note
    const editnote = async (id ,title, description, tag)=>{
      //API Call

      const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag})
      });
      const json =  response.json();
      //Logic to edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id==id) {

          element.title = title;
          element.description = description;
          element.tag = tag; 
          
        }
        
      }
      getallnotes();
    }
    return (
      <notecontext.Provider value={{notes, setNotes,addnote,deletenote,editnote, getallnotes}}>
        {props.children}
      </notecontext.Provider>
    )
}


export default Notestate;