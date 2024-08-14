import React from 'react';
import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  if (error) {
    //Alert.alert('Dükkan', 'Bir Hata Oluştu.');
    //console.log('Hata: :' + error + ' URL: ' + Config.API_AUTH_URL);
  }
  if (data) {
    if (data === 'hata') {
      Alert.alert('Error', 'Kullanıcı Bulunamadı');
    } else {
      navigation.navigate('ProductsPage');
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
