import { useState, useEffect } from 'react';

const useFetch = (url, setData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        setData(resJson);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, setData]);
  return { loading, error };
};
export default useFetch;
