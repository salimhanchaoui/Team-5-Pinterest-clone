import React, { useState,useContext } from "react";
import Users from "../data/usersDummy.js";
import Post from "./Post.jsx";
import OnePost from "./OnePost.jsx";
import { DataContext } from '../Context.js';

function AllPosts() {
  const [details, setDetails] = useState(false);
  const { data, oneP, setOnep } = useContext(DataContext);
  const handleDetails = (obj) => {
    setDetails((prevDetails) => !prevDetails);
    setOnep(obj);
  };
  return (
    <div>
      {details && <OnePost  one={oneP} set={setDetails}/>}
    <div className="allposts">
      {data.map((el, i) => (
        <Post data={el}  handle={handleDetails}/>
      ))}
    </div></div>
  );
}

export default AllPosts;
