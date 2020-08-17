import React from 'react';
import {View, Image} from 'react-native';

export const MealImage = ({img}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
        source={{
          uri: img,
        }}
      />
    </View>
  );
};
