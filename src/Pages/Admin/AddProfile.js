import React, { useState, useEffect } from "react";
import useDatabase from "../../firebase/useDatabase";
import useStorage from "../../firebase/useStorage";

export const AddProfile = () => {
  // const avatarInit =
  //   "https://firebasestorage.googleapis.com/v0/b/fcc-react-50845.appspot.com/o/DefaultProfile.jpeg?alt=media&token=300e262a-fdcc-4624-846b-961f65fcfdd4";

  const profileDateInit = {
    name: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fcc-react-50845.appspot.com/o/DefaultProfile.jpeg?alt=media&token=300e262a-fdcc-4624-846b-961f65fcfdd4",
    title: "",
    github: "",
  };

  const [profileData, setProfileData] = useState(profileDateInit);
  // const [avatar, setAvatar] = useState(null);
  const [selection, setSelection] = useState(null);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const { progress, url, err } = useStorage(file);
  const { msg } = useDatabase(data);

  console.log(msg);

  const handleOnChangeImage = (e) => {
    const types = ["image/png", "image/jpeg"];
    let selected = e.target.files[0]; // This will select only ONE file

    if (selected && types.includes(selected.type)) {
      // setAvatar(URL.createObjectURL(selected));
      setProfileData({
        ...profileData,
        image: URL.createObjectURL(selected),
      });
      setSelection(selected);
    } else {
      // setAvatar(avatarInit);
      setSelection(null);
    }
  };

  const handleOnChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlelOnSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT");
    if (profileData.image !== profileDateInit.image) {
      console.log("Submitting Picture");
      setFile(selection);
    } else {
      console.log("Submitting Data");
      setData(profileData);
    }
  };

  useEffect(() => {
    if (url) {
      console.log("Submitting Data");
      setFile(null);
      setData({ ...profileData, image: url });
    }
  }, [url]);

  // console.log({ profileData });
  console.log({ data });

  return (
    <div className="profile">
      <form onSubmit={handlelOnSubmit} autoComplete="off">
        <div className="image-holder">
          <label>
            <input
              type="file"
              className="hover-above-image"
              onChange={handleOnChangeImage}
              name="image"
            />
            <img src={profileData.image}></img>
          </label>
        </div>
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
