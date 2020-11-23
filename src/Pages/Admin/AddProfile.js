import React, { useState } from "react";
import useDatabase from "../../firebase/useDatabase";
// import "../../DefaultProfile.png";

export const AddProfile = () => {
  const profileDateInit = {
    name: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fcc-react-50845.appspot.com/o/DefaultProfile.jpeg?alt=media&token=300e262a-fdcc-4624-846b-961f65fcfdd4",
    role: "",
    title: "",
    github: "",
  };

  const [profileData, setProfileData] = useState(profileDateInit);
  const [file, setFile] = useState(null);

  const { msg } = useDatabase(file);

  console.log(msg);

  const handleOnChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  console.log({ profileData });

  const handlelOnSubmit = () => {
    setFile(profileData);
  };

  return (
    <div className="profile">
      <form onSubmit={handlelOnSubmit} autoComplete="off">
        <input
          type="image"
          className="image-holder"
          onChange={handleOnChange}
          name="image"
          placeholder="Image"
          src={profileData.image}
        />
        <input
          onChange={handleOnChange}
          name="name"
          placeholder={"Name"}
          value={profileData.name}
        />
        <input
          onChange={handleOnChange}
          name="title"
          placeholder="Title"
          value={profileData.title}
        />
        <input
          onChange={handleOnChange}
          name="quote"
          placeholder="Quote"
          value={profileData.quote}
        />
        <input
          onChange={handleOnChange}
          name="github"
          placeholder="Github"
          value={profileData.github}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
