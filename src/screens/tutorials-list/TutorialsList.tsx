import React from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import {TutorialsListScreenNavigationProp} from '../AppNavigation';
import {TUTORIALSS_LIST} from '../../utils/constants';

export const TutorialsList: React.FC<TutorialsListScreenNavigationProp> = ({
  navigation,
  route,
}) => {
  const renderAppsItem = ({
    item,
  }: {
    item: {id: string; name: string; video: any};
  }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.push('Tutorial', {data: item});
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
        data={TUTORIALSS_LIST[route.params.app] || []}
        renderItem={renderAppsItem}
        keyExtractor={(item: {id: string; name: string; video: any}) => item.id}
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
