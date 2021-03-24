import React from "react";
import ListItem from "./ListItem.jsx";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import PostPage from "../Pages/PostPage.jsx";

export default function List(props) {
  console.log(props);
  const { posts, loading, error } = props;
  return (
    <div className="crud-list">
      {loading && "Идет загрузка данных..."}
      {error}
      {posts.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </div>
  );
}
