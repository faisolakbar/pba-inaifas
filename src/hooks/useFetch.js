import { useState, useEffect } from "react";
import axios from "axios";

const config = require("../config.json");
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(config.url + url);
        setLoading(true);
        setData(resp.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { error, loading, data };
}
