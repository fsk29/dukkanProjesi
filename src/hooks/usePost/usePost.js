import {useState} from 'react';
import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';

import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      //Alert.alert('try', '');
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setData('hata');
      setLoading(false);
      //Alert.alert('catch', '');
    }
  };

  return {data, loading, error, post};
};

export default usePost;
