import React from "react";
import { useState, useEffect } from "react";

export default function usePostsFetch(url) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        let response = await fetch(url);
        if (!response.ok) {
          setError(response.statusText);
        }

        fetch(url)
          .then((response) => response.json())
          .then((posts) => {
            setPosts(posts);
          });
      } catch {
        setError("Ошибка загрузки");
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);
  return [posts, loading, error];
}
