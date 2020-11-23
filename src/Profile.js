import React from "react";
import useFeaturedData from "./firebase/useFeaturedData";
import "./App.css";

export default function Profile() {
  const profiles = useFeaturedData("profiles");
  console.log(profiles);
  return (
    <div className="profile-holder grid-container">
      {profiles.map(({ name, image, title, quote }) => (
        <div className="profile">
          <div
            className="image-holder"
            style={{ backgroundImage: "url(" + image + ")" }}
          ></div>
          <div>
            <h1>{name}</h1>
            <h3>{title}</h3>
            <blockquote>"{quote}"</blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}
