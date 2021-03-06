import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import SearchScreen from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShow';


const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Search : SearchScreen,
    ResultsShow :ResultsShow
  },
  {

    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);