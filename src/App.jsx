import React from "react";
import "./App.css";
import CommunityBoard from "./components/CommunityBoard";


function App() {
  return (


    <div className="app">
      <img src={"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610307820254-NIPW7WKV3IXFVSNF92ZQ/29.jpg"} 
      width= "1700px"
      height="500px"
      />
      <h1>My Top Album Reccomendations</h1>
      <CommunityBoard />
    </div>
  );
}

export default App;
