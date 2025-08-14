import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1); // Go back to previous page
    };
  return (
    <div>
      <h3>About Page</h3>
      <button onClick={goBack}>⬅ Back</button>
    </div>
  )
}

export default About
