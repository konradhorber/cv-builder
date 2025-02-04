import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  
  return (
    <>
      <h1>My CV</h1>
      <h2>General info</h2>
      <GeneralInfo isEditing={isEditing} />
      <h2>Education</h2>
      <Education isEditing={isEditing} />
      <h2>Experience</h2>
      <Experience isEditing={isEditing} />
      <button type="button" onClick={toggleEditing}>
        Toggle editing
      </button>
    </>
  )
}

export default App
