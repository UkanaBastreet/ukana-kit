import { useState, useEffect } from "react";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type Response<Data> = {
  loading: boolean;
  data?: Data;
  error?: Error;
};

export const useFetch = <Data>(
  url: string,
  method: RequestMethod = "GET",
  headers: HeadersInit = {},
  body?: BodyInit
): Response<Data> => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const data = await response.json();
        if (response.ok) {
          setData(data);
        } else {
          setError(data.message);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, headers, body]);

  return { loading, data, error };
};
