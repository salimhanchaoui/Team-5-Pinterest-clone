import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Post(props) {
  const [users,setUsers]=useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/getOneUserid/${props.data.users_idUsers}`)
      .then((result) => {
        setUsers(result.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className='postCard' onClick={()=>props.handle(props.data)}>
    <div className='postContainer'>
      <img src={props.data.photo} alt="" className='postimg' />
      <div className='userOverlay'>
        <img src={users.photo} alt="" className='userimg' />
        <h2>{users.username}</h2>
      </div>
    </div>
  </div>
    
  )
}

export default Post