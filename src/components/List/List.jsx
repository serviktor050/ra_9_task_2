import React from "react";
import ListItem from "./ListItem.jsx";

export default function List(props) {
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
