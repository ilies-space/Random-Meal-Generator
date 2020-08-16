import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export const Instruction = ({instructions}) => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <Text>{instructions}</Text>
    </View>
  );
};
