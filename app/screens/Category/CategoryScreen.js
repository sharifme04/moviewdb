import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native';
import {fetchCategoryItems} from '../../actions/movies';
import {theme} from '../../theme/theme';
import styles from './Style';

const CategoryScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {id} = route?.params?.genre || '';
  const results = useSelector((state) => state.movies?.categoryItems?.results);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(results);

  useEffect(() => {
    dispatch(fetchCategoryItems(id, page));
  }, [id, page, dispatch]);

  useEffect(() => {
    if (page === 1) {
      return setTotal(results);
    }
  }, [results, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
    setTotal([...total, ...results]);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', {id: item.id})}>
      <Text style={styles.title}>{item?.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={total}
          renderItem={renderItem}
          keyExtractor={(item, i) => (item.id + i).toString()}
          ListFooterComponent={
            !total?.length && (
              <ActivityIndicator
                size="large"
                color={theme.colors.buttonPrimary}
              />
            )
          }
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
        <Button
          title="Go to Live Search"
          color={theme.colors.buttonPrimary}
          onPress={() => navigation.navigate('LiveSearch')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
