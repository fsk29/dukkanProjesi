import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && !showError) {
      setShowError(true);
      Alert.alert('Dükkan', 'Bir Hata Oluştu.');
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      if (data === 'hata' && !showError) {
        setShowError(true);
        Alert.alert('Error', 'Kullanıcı Bulunamadı');
      } else if (data !== 'hata') {
        dispatch({type: 'SET_USER', payload: {user}});
        //navigation.navigate('ProductsPage');
      }
    }
  }, [data]);

  function handleLogin(values) {
    setShowError(false);
    if (values.username === '') {
      Alert.alert('Hata', 'Kullanıcı Adını Giriniz.');
    } else {
      if (values.password === '') {
        Alert.alert('Hata', 'Şifrenizi Giriniz.');
      } else {
        post(Config.API_AUTH_URL + '/login', values);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          source={require('../../assets/loginLogo.png')}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı Adını Giriniz"
              value={values.username}
              onChangeText={handleChange('username')}
              secureTextEntry={false}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi Giriniz"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
              iconName="key"
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
