/*
import React from "react";
import { useState } from "react";
import PostsContext from "../components/PostsContext.jsx";
import usePostsFetch from "../components/hooks/usePostsFetch.jsx";

export default function PostsProvider(props) {
  const [posts, loading, error] = usePostsFetch(
    "https://ra-9-task-2-server.herokuapp.com/posts",
    []
  );

  console.log(posts);
  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {props.children}
    </PostsContext.Provider>
  );
}
*/
