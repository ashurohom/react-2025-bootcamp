import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div>
      <h3>Home Page</h3>
      <button onClick={goBack}>⬅ Back</button>
    </div>
  );
}

export default Home;
