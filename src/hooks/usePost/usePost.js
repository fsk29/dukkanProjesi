import { useState } from 'react';
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

      const response = await axios.post(url, apiData);
      setData(response.data);
    } catch (err) {
      // Check if the error is a 401 status code
      if (err.response && err.response.status === 401) {
        setError('Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin.');
      } else {
        setError('Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, post };
};

export default usePost;
