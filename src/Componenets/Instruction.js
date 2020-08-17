import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export const Instruction = ({instructions}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>Instructions</Text>

      <ScrollView>
        <Text>{instructions}</Text>
      </ScrollView>
    </View>
  );
};
