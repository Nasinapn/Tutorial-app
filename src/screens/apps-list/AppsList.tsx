import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import {AppsListScreenNavigationProp} from '../AppNavigation';
import {APPS_LIST} from '../../utils/constants';

export const AppsList: React.FC<AppsListScreenNavigationProp> = ({
  navigation,
}) => {
  const renderAppsItem = ({item}: {item: {id: string; name: string}}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.push('TutorialsList', {app: item.id});
        }}>
        <View style={styles.appItem}>
          <Text>{item.name}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={APPS_LIST}
        renderItem={renderAppsItem}
        keyExtractor={(item: {id: string; name: string}) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  appItem: {
    width: '100%',
    paddingLeft: 20,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#d3d3de',
    borderBottomWidth: 1,
  },
});
