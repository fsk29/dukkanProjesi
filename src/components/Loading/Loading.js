import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    //<LottieView source={require('../../assets/loading.json')} autoPlay />

    <View style={{flex: 1}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assets/loading.json')}
        autoPlay
      />
    </View>
  );
};

export default Loading;
