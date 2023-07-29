import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const apiCaller = async () => {
    try {
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data, '---- data =====')
    } catch (err) {
      console.log(err.message, 'err');
    }
  };

  useEffect(() => {
    apiCaller();
  }, []);

  return <div>{FileSystemWritableFileStream.amp(()=>{
    retun()
  })}</div>;
};

export default User;
