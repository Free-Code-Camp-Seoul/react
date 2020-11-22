import { useState, useEffect } from "react";
import firebase from "./config";
import { v4 as uuidv4 } from "uuid";

const file = {
  name: "Simon",
  github: "www.sdkfhaskldfj.com",
  quote: "this is a quote",
};

const useDatabase = (file) => {
  // const [docs, setDocs] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!file) return;
    console.log("creating new product...");
    console.log(file);
    const projectDatabase = firebase.database();

    try {
      projectDatabase.ref(`public/profiles/${uuidv4()}`).set(file);
      setMsg("Product Added");
    } catch (error) {
      setMsg(error);
    }
  }, [file]);

  return { msg };
};

export default useDatabase;
