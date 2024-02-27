import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {AppsList} from './apps-list/AppsList';
import {Tutorial} from './tutorial/Tutorial';
import {TutorialsList} from './tutorials-list/TutorialsList';
import {Title} from './title/Title';

type AppNavigationParamsList = {
  Title: undefined;
  AppsList: undefined;
  TutorialsList: {app: string};
  Tutorial: {data: {id: string; name: string; video: any}};
};

const StackNavigator = createNativeStackNavigator<AppNavigationParamsList>();
export type TitleScreenNavigationProp = NativeStackScreenProps<
  AppNavigationParamsList,
  'Title'
>;
export type AppsListScreenNavigationProp = NativeStackScreenProps<
  AppNavigationParamsList,
  'AppsList'
>;
export type TutorialsListScreenNavigationProp = NativeStackScreenProps<
  AppNavigationParamsList,
  'TutorialsList'
>;
export type TutorialScreenNavigationProp = NativeStackScreenProps<
  AppNavigationParamsList,
  'Tutorial'
>;

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={'Title'}
        screenOptions={
          {
            //   headerShown: false,
          }
        }>
        <StackNavigator.Screen
          name={'Title'}
          component={Title}
          options={{headerShown: false}}
        />
        <StackNavigator.Screen
          name={'AppsList'}
          component={AppsList}
          options={{title: 'Apps List'}}
        />
        <StackNavigator.Screen
          name={'TutorialsList'}
          component={TutorialsList}
          options={{title: 'Tutorials List'}}
        />
        <StackNavigator.Screen
          name={'Tutorial'}
          component={Tutorial}
          options={({route}) => ({title: route.params.data.name})}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
