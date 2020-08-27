import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexContiainer: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    padding: 5,
    marginVertical: 1,
  },
  spokenLanguage: {flexDirection: 'row'},
  spokenText: {
    flex: 1,
    paddingLeft: 5,
  },
  buttonStyle: {
    backgroundColor: '#fc454e',
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 45,
    marginBottom: 6,
  },
});

export default styles;
