import React from "react";
import { Link } from "react-router-dom";

export default function ListItem(props) {
  const { post } = props;

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="crud-list-item">{post.content}</div>
    </Link>
  );
}
