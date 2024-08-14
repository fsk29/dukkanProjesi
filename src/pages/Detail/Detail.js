import React from 'react';
import {SafeAreaView, Text, Image, View} from 'react-native';
import Config from 'react-native-config';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const {error, loading, data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
