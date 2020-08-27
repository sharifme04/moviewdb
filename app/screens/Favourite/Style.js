import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    padding: 20,
    marginVertical: 1,
  },

  item: {
    maxWidth: '90%',
  },
  title: {
    fontSize: 20,
  },
  delete: {
    fontSize: 20,
    color: theme.colors.white,
    backgroundColor: theme.colors.red,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  backHome: {
    fontSize: 20,
    color: theme.colors.white,
    backgroundColor: theme.colors.red,
    padding: 10,
    borderRadius: 15,
  },
  emptyTitle: {
    alignSelf: 'center',
  },
});

export default styles;
