import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL);
  const handleProductSelect = () => {
    navigation.navigate('DetailPage');
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={handleProductSelect} />
  );

  if (loading) {
    return <Loading />;
  }
  console.log(error);
  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
