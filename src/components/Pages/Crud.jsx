import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "../List/List.jsx";
import CreatePostButton from "../CreatePostButton/CreatePostButton.jsx";
import NewPostPage from "../Pages/NewPostPage.jsx";
import usePostsFetch from "../hooks/usePostsFetch.jsx";
import PostPage from "../Pages/PostPage.jsx";
import EditPostPage from "../Pages/EditPostPage.jsx";
import { useRef } from "react";
//import PostsContext from "../PostsContext.jsx";
//import PostsProvider from "../PostsProvider.jsx";
//import { useContext } from "react";

export default function Crud() {
  const [posts, loading, error] = usePostsFetch(
    "https://ra-9-task-2-server.herokuapp.com/posts",
    []
  );

  const refPosts = useRef([]);
  refPosts.current = posts;
  console.log(refPosts);

  /*
  const { value } = useContext(PostsContext);

  console.log(value);
*/
  return (
    <Router>
      <div className="crud">
        <Link to="/posts/new">
          <CreatePostButton />
        </Link>
        <Switch>
          <Route
            path="/posts/:id/edit"
            render={(props) => <EditPostPage {...props} posts={posts} />}
          />
          <Route
            path="/posts/new"
            render={(props) => <NewPostPage {...props} />}
          />
          <Route
            path="/posts/:id"
            render={(props) => <PostPage {...props} posts={posts} />}
          />
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
