import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EditPostPage(props) {
  const { match, posts, history } = props;
  const idFromMatch = match.url.substring(7);
  const id = Number(idFromMatch.substring(0, idFromMatch.length - 5));

  const post = posts.find((post) => post.id === id);

  const DEFAULT = {
    id: post.id,
    content: post.content,
  };

  const [state, setState] = useState(DEFAULT);

  const onEditPost = (editedPost) => {
    fetch("https://ra-9-task-2-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(editedPost),
    });
  };

  const onFormFieldChange = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        content: e.target.value,
      };
      return newState;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.content !== "") {
      const editedPost = {
        id: post.id,
        content: state.content,
      };
      onEditPost(editedPost);
      history.push(`/posts/${post.id}`);
    }
  };

  return (
    <div className="post-page">
      <Link to={`/posts/${post.id}`}>
        <div className="material-icons clear">clear</div>
      </Link>
      <h2>Редактировать пост</h2>
      <textarea
        type="text"
        placeholder="Напишите о чем-нибудь..."
        onChange={onFormFieldChange}
        value={state.content}
      />
      <input type="submit" value="Сохранить" onClick={onSubmit} />
    </div>
  );
}
