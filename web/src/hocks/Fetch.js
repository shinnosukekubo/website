import { useState, useEffect } from "react";
import { removeTrailingSlash } from "../utilities/String";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export function useFetchFromDefaultServer(api) {
  const endpoint = process.env.REACT_APP_DEFAULT_SERVER_ENDPOINT;
  return useFetch(removeTrailingSlash(endpoint) + "/" + api);
}
