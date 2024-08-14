import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
    tintColor: '#fff',
  },
  body_container: {
    flex: 1,
  },
});

export default styles;
