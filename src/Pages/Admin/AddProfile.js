import React, { useState } from "react";
import useDatabase from "../../firebase/useDatabase";

export const AddProfile = () => {
  const profileDateInit = {
    name: "",
    image: "",
    role: "",
    quote: "",
  };

  const [profileData, setProfileData] = useState(profileDateInit);

  const { msg } = useDatabase(profileDataInput);

  console.log(msg);

  const handleOnChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlelOnSubmit = () => {
    const profileDataInput = {
      name: "Damien",
      image: "should be from firebase",
      role: "owner",
      quote: "Pink is just a fancy shade of grey",
    };
    setProfileData(profileDataInput);
  };

  return (
    <div>
      <form onSubmit={handlelOnSubmit}>
        <input
          onChange={handleOnChange}
          name={profileName}
          value={profileData.name}
        />
        <input
          onChange={handleOnChange}
          name={profileImage}
          value={profileData.image}
        />
        <input
          onChange={handleOnChange}
          name={profileRole}
          value={profileData.role}
        />
        <input
          onChange={handleOnChange}
          name={profileQuote}
          value={profileData.quote}
        />
      </form>
    </div>
  );
};
