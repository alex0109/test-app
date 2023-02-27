import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../types/IPost";

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [offset, setOffset] = useState(3);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        setError("");
        setLoading(true);
        setButtonDisabled(true);
        const response = axios.get<IPost[]>(
          "https://jsonplaceholder.typicode.com/posts?limit=5"
        );
        console.log((await response).data);
        setPosts((await response).data);
        setLoading(false);
        setButtonDisabled(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setButtonDisabled(false);
        setError(error.message);
      }
    }
    getPosts();
  }, []);
  return { posts, loading, buttonDisabled, error, offset, setOffset };
};
