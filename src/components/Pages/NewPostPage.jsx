import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//import shortid from "shortid";
//import moment from "moment";

//moment.locale("ru");

const DEFAULT = {
  content: "",
};

export default function NewPostPage() {
  const [state, setState] = useState(DEFAULT);

  const onNewPost = (post) => {
    fetch("https://ra-9-task-2-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(post),
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
      const post = {
        id: 0,
        content: state.content,
      };
      onNewPost(post);
      setState((prev) => ({ ...prev, content: "" }));
    }
  };

  return (
    <div className="new-post-form">
      <Link to="/">
        <div className="material-icons clear">clear</div>
      </Link>
      <h2>Добавить новый пост</h2>
      <textarea
        type="text"
        placeholder="Напишите о чем-нибудь..."
        onChange={onFormFieldChange}
        value={state.content}
      />
      <input type="submit" value="Опубликовать" onClick={onSubmit} />
    </div>
  );
}
