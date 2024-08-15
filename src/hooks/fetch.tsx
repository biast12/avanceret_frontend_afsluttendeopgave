async function simpleFetch<T>(url: string, method: "GET" | "POST" = "GET", body?: any) {
  let data: T | null = null;
  let error: Error | null = null;

  const fetchData = async () => {
    try {
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method === "POST" && body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const result: T = await response.json();
      data = result;
    } catch (err) {
      if (err instanceof Error) {
        if (err.name !== "AbortError") {
          error = err;
        }
      } else {
        error = new Error("An unknown error occurred");
      }
    }
  };

  await fetchData();
  return {
    data,
    error,
  };
}

export default simpleFetch;
