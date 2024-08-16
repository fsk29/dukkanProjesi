import {useState} from 'react';
import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      // Reset states before making a new request
      setData(null);
      setError(null);
      setLoading(true);

      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
    } catch (err) {
      setError(err);
      setData('hata');
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, post};
};

export default usePost;
