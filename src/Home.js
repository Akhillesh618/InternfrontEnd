import React from "react";
import "./Home.css"
const Home = (props) => {
  return (
    <div>
      <div className="Header"> <h2>TEAM DACHRS!!!</h2>
      
      <button
        onClick={() => {
          props.onClick("");
        }}
      >
        Logout
      </button>
      </div>
    </div>
  );
};
export default Home;
