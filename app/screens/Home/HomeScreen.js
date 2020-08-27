import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native';
import {fetchCategory} from '../../actions/movies';
import {theme} from '../../theme/theme';
import styles from './Style';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movies?.category?.genres);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Category', {genre: item})}>
      <Text style={styles.title}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={genres}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            !genres?.length && (
              <ActivityIndicator
                size="large"
                color={theme.colors.buttonPrimary}
              />
            )
          }
        />
        <Button
          title="Favourite List"
          color={theme.colors.buttonPrimary}
          onPress={() => navigation.navigate('Favourite')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
