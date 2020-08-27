import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {fetchMoviesLive} from '../../actions/movies';
import EmptyComponent from '../../components/EmptyComponent';
import styles from './Style';

const LiveSearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const results = useSelector((state) => state.movies?.liveMovies?.results);
  const [total, setTotal] = useState(results);

  useEffect(() => {
    dispatch(fetchMoviesLive(search ? search : ' ', page));
  }, [dispatch, page, search]);

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
    <SafeAreaView>
      <TextInput
        style={styles.container}
        onChangeText={(text) => setSearch(text)}
        placeholder="Please search here"
        value={search}
      />
      <FlatList
        data={total}
        renderItem={renderItem}
        keyExtractor={(item, i) => (item.id + i).toString()}
        ListEmptyComponent={
          <EmptyComponent
            navigation={navigation}
            title="Please write above or"
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default LiveSearchScreen;
