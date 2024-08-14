import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {fontWeight: 'bold', fontSize: 25},
  desc: {
    fontStyle: 'italic',
    marginVertical: 5,
    fontSize: 16,
    textAlign: 'justify',
  },
  price: {fontWeight: 'bold', fontSize: 22, textAlign: 'right'},
});

export default styles;
