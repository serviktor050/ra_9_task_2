import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "../List/List.jsx";
import CreatePostButton from "../CreatePostButton/CreatePostButton.jsx";
import NewPostPage from "../Pages/NewPostPage.jsx";
import usePostsFetch from "../hooks/usePostsFetch.jsx";
//import PostPage from "../Pages/PostPage.jsx";

export default function Crud() {
  const [posts, loading, error] = usePostsFetch(
    "https://ra-9-task-2-server.herokuapp.com/posts"
  );

  return (
    <Router>
      <div className="crud">
        <Link to="/posts/new">
          <CreatePostButton />
        </Link>
        <Switch>
          <Route path="/posts/new" component={NewPostPage} />
          <Route
            path="/"
            render={(props) => (
              <List {...props} posts={posts} loading={loading} error={error} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
