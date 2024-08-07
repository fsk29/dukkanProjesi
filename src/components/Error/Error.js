import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assets/error.json')}
        autoPlay
      />
    </View>
  );
};

export default Error;
