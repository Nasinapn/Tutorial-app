import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TutorialScreenNavigationProp} from '../AppNavigation';
import Video from 'react-native-video';

export const Tutorial: React.FC<TutorialScreenNavigationProp> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.container}>
      <Video
        source={route.params.data.video}
        paused={false} // make it start
        style={{width: '100%', height: '100%'}} // any style you want
        repeat={true}
        fullscreen={true}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
  },
});
