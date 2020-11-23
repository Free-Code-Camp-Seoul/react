import { useState, useEffect } from "react";
import firebase from "./config";
import { v4 as uuidv4 } from "uuid";

const useDatabase = (data) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!data) return;
    setMsg("creating new product...");
    const projectDatabase = firebase.database();

    try {
      projectDatabase.ref(`public/profiles/${uuidv4()}`).set(data);
      setMsg("Product Added");
    } catch (error) {
      setMsg(error);
    }
  }, [data]);

  return { msg };
};

export default useDatabase;
