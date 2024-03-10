import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {TitleScreenNavigationProp} from '../AppNavigation';

export const Title: React.FC<TitleScreenNavigationProp> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('AppsList');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('./logo.jpeg')}
        style={styles.logoStyle}
        resizeMode="contain"
      />
    </View>
  );
};
const screenWidthForImage = Dimensions.get('window').width;
const ratio = screenWidthForImage / 673;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(150,208,220,1)',
  },
  appItem: {
    width: '100%',
    paddingLeft: 20,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#d3d3de',
    borderBottomWidth: 1,
  },
  logoStyle: {
    width: Dimensions.get('window').width,
    height: 673 * ratio,
  },
});
