import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TitleScreenNavigationProp} from '../AppNavigation';

export const Title: React.FC<TitleScreenNavigationProp> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.push('AppsList');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Tutorial App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
