import { useState, useEffect } from "react";
import firebase from "./config";
import { v4 as uuidv4 } from "uuid";

const useDatabase = (file) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!file) return;
    setMsg("creating new product...");
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
