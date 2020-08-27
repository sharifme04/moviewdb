import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  ActivityIndicator,
  Image,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import Config from 'react-native-config';
import {detailsMovies} from '../../actions/movies';
import {addFavourite, removeFavourite} from '../../actions/favourite';
import {theme} from '../../theme/theme';
import styles from './Style';

const DetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const {id} = route?.params || '';
  const movie = useSelector((state) => state.movies?.movie);
  const favourite = useSelector((state) => state.favourite?.favouriteMovies);

  useEffect(() => {
    dispatch(detailsMovies(id));
  }, [id, dispatch]);

  return (
    <SafeAreaView style={styles.flexContiainer}>
      <View style={styles.flexContiainer}>
        <ScrollView>
          <View style={styles.body}>
            <View>
              {movie?.poster_path ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: `${Config.IMAGE_BASE_PATH}/w500/${movie?.poster_path}`,
                  }}
                />
              ) : (
                <ActivityIndicator size="large" color="#0000ff" />
              )}
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Movie Name: {movie?.title}
              </Text>
              <Text style={styles.sectionDescription}>
                Overview: {movie?.overview}
              </Text>
              <Text style={styles.sectionDescription}>
                Release date: {movie?.release_date}
              </Text>
              <Text style={styles.sectionDescription}>
                Status: {movie?.status}
              </Text>
              <Text style={styles.sectionDescription}>
                Popularity: {movie?.popularity}
              </Text>
              <Text style={styles.sectionDescription}>
                Homepage: {movie?.homepage}
              </Text>
              <View>
                <Text style={styles.sectionDescription}>
                  Spoken languages:{' '}
                </Text>
                {movie?.spoken_languages?.map((e, i) => (
                  <View key={i} style={styles.spokenLanguage}>
                    <Text style={styles.spokenText}>{e.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        {favourite?.includes(movie?.title) ? (
          <Button
            title="Remove from favorites"
            color={theme.colors.buttonPrimary}
            onPress={() => dispatch(removeFavourite(movie?.title))}
          />
        ) : (
          <Button
            title="Add to favorites"
            color={theme.colors.green}
            onPress={() => dispatch(addFavourite(movie?.title))}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
