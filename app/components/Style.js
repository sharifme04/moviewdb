import {StyleSheet} from 'react-native';
import {theme} from '../theme/theme';

const styles = StyleSheet.create({
  backHome: {
    fontSize: 20,
    color: theme.colors.white,
    backgroundColor: theme.colors.buttonPrimary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    alignSelf: 'center',
  },
  emptyTitle: {
    alignSelf: 'center',
    color: 'black',
  },
  title: {
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
