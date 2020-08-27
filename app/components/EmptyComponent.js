import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './Style';
import PropTypes from 'prop-types';

const EmptyComponent = ({navigation, title}) => {
  return (
    <View style={styles.emptyTitle}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.backHome}>
        <Text style={styles.backHome}>Back To home</Text>
      </TouchableOpacity>
    </View>
  );
};

EmptyComponent.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object,
};
export default EmptyComponent;
