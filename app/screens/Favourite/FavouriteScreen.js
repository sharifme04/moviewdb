import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  TouchableOpacity,
  FlatList,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import {removeFavourite} from '../../actions/favourite';
import EmptyComponent from '../../components/EmptyComponent';
import styles from './Style';

const FavouriteScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite?.favouriteMovies);

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(removeFavourite(item))}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={favourite}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        ListEmptyComponent={
          <EmptyComponent
            navigation={navigation}
            title="Please add your favourite or"
          />
        }
      />
    </SafeAreaView>
  );
};

export default FavouriteScreen;
