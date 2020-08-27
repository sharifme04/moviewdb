import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoryScreen from '../screens/Category/CategoryScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import FavouriteScreen from '../screens/Favourite/FavouriteScreen';
import LiveSearchScreen from '../screens/LiveSearch/LiveSearchScreen';

import {theme} from '../theme/theme';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.headerBackground,
        },
        headerTintColor: theme.colors.white,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Movie Categories',
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({route}) => ({
          title: `${route.params.genre.name} Category`,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Movie Details',
        }}
      />
      <Stack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: 'Favourite Movies',
        }}
      />
      <Stack.Screen
        name="LiveSearch"
        component={LiveSearchScreen}
        options={{
          title: 'LiveSearch Movies',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
