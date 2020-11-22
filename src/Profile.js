import React from "react";
import useFeaturedData from "./firebase/useFeaturedData";

export default function Profile() {
  const profiles = useFeaturedData("profiles");
  console.log(profiles);
  return (
    <ul>
      {profiles.map(({ name }) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}
