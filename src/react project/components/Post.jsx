import React from "react";
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Login from "./Login";

let user = JSON.parse(localStorage.getItem("user"))
let userId
 user?userId = user.id:userId = 0

function Post() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    // const [div, setDiv] = useState("");


    async function getComments(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const dataJso = await res.json()
        setComments(dataJso)
        console.log("fet");
    }
  const param = useParams()
   
   
    async function getPost() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param.postId}`)
        const dataJson = await res.json()
        setPost(dataJson)
    }

  
    useEffect(() => {
        getPost()
        setComments([])
        return () => { }
    }, [param.postId]);

    

    return (
        <div>
            {post.length != 0 && <h2>{post.body}</h2>}
            { <button onClick={() => getComments(param.postId)}>comments</button> }
            {<div>{comments.length != 0 && comments.map((element) => <p>{element.body}</p>)}</div> }
        </div>
    );
}

export default Post;