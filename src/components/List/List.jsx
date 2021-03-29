import React from "react";
import ListItem from "./ListItem.jsx";
//import { useRef } from "react";

export default function List(props) {
  //const refPosts = useRef([]);
  const { posts, loading, error } = props;
  /*
  refPosts.current = posts;
  console.log(refPosts);
*/
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
