import React from "react";
import profilePic from "./assets/card.jpg";
export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Sagar Raut</h2>
      <p className="card-text">I am learning React</p>
    </div>
  );
}
