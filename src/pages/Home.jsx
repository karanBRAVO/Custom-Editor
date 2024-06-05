import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/custom-editor");
  };

  return (
    <>
      <div className="home-container">
        <h1>Welcome to KY-Editor</h1>
        <p>creating notes made easy</p>
        <button
          type="button"
          className="btn btn-border-3"
          onClick={handleClick}
        >
          Explore
        </button>
      </div>
    </>
  );
};

export default Home;
