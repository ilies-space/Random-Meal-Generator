import React from 'react';
import {View, Image} from 'react-native';

export const MealImage = ({img}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 150, height: 150}}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};
