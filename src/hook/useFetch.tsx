import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            setError(err);
          }
        } else {
          setError(new Error("An unknown error occurred"));
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error };
}

export default useFetch;
