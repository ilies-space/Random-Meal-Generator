import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export const Ingrediants = ({ingredients}) => {
  return (
    <ScrollView style={{width: '100%', paddingHorizontal: 20}}>
      {ingredients.map((data, key) => {
        return (
          <View style={{flexDirection: 'row'}} key={key}>
            <View style={{flex: 1}}>
              <Text>{data.strIngredient}</Text>
            </View>
            <View>
              <Text>{data.strMeasure}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
