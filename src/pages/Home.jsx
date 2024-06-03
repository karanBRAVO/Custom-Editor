import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/custom-editor");
  };

  return (
    <>
      <div>
        <h1>Welcome to KY-Editor</h1>
        <p>creating notes made easy</p>
        <button type="button" onClick={handleClick}>
          Explore
        </button>
      </div>
    </>
  );
};

export default Home;
