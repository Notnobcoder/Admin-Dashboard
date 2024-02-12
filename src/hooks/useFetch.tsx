import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleFetch = async () => {
      await axios
        .get(url)
        .then((_res) => {
          setData(_res.data.fabric.qrCodeURL);
          setLoading(false);
        })
        .catch((_err) => {
          setData(_err.response.data.error);
          setLoading(false);
        });
    };
    handleFetch();
  }, [url]);

  return { data, loading };
};
