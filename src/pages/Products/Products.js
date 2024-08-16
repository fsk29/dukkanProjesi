import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  View,
  Button,
} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {useDispatch, useSelector} from 'react-redux';

const Products = ({navigation}) => {
  const user = useSelector(s => s.user);
  const dispatch = useDispatch();
  const {error, loading, data} = useFetch(Config.API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Text>{user.name.firstname}</Text>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
