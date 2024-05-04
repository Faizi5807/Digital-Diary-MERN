import React from 'react'
// import notecontext from '../context/notes/noteContext'
// import { useContext } from 'react'

const About = () => {
  // const a = useContext(notecontext);
  // useEffect(()=>{
  //   a.update();
  //   // eslint-disable-next-line
  // },[])
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    color: '#333',
  };

  const paragraphStyle = {
    color: '#555',
    marginBottom: '10px',
  };

  const listStyle = {
    marginLeft: '20px',
  };

  const listItemStyle = {
    color: '#666',
  };
  return (
    <div className='my-5' style={containerStyle}>
      <h1 style={headingStyle}>About MyNotes</h1>
      <p style={paragraphStyle}>Welcome to MyNotes, the simple note-taking app!</p>
      <p style={paragraphStyle}>With MyNotes, you can:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Take and save your notes</li>
        <li style={listItemStyle}>Organize your notes withtags</li>
        <li style={listItemStyle}>Access your notes from any device</li>
      </ul>
      <p style={paragraphStyle}>Start organizing your thoughts and ideas today with MyNotes!</p>
    </div>
  )
}

export default About
