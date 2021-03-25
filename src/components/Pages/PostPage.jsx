import React from "react";
import { Link } from "react-router-dom";

export default function PostPage(props) {
  const { match, posts, history } = props;
  const id = Number(match.url.substring(7));

  const post = posts.find((post) => post.id === id);

  const onDelete = (id) => {
    fetch(`https://ra-9-task-2-server.herokuapp.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  const onDeletePost = (e) => {
    e.preventDefault();
    onDelete(id);
    history.push("/");
  };

  return (
    <div className="post-page">
      <Link to="/">
        <div className="material-icons clear">clear</div>
      </Link>
      {post.id}
      {post.content}
      <Link to={`/posts/${post.id}/edit`}>
        <input type="submit" value="Редактировать" />
      </Link>
      <input type="submit" value="Удалить" onClick={onDeletePost} />
    </div>
  );
}
