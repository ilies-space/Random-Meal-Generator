import React from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Button title="get meal !" />
      <View
        style={{
          flexDirection: 'row',
          height: 80,
          backgroundColor: 'red',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>" IMG "</Text>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: 'gray',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>" TITLE "</Text>
          <Text style={{fontSize: 12}}>" Category "</Text>
        </View>
      </View>
      <View flex={1}>
        <ScrollView>
          <View padding={10}>
            <Text>
              Esse ad id aliquip velit culpa est eiusmod adipisicing dolore qui
              Lorem.Esse ad id aliquip velit culpa est eiusmod adipisicing
              dolore qui Lorem.Esse ad id aliquip velit culpa est eiusmod
              adipisicing dolore qui Lorem. Esse ad id aliquip velit culpa est
              eiusmod adipisicing dolore qui Lorem.Esse ad id aliquip velit
              culpa est eiusmod adipisicing dolore qui Lorem.Esse ad id aliquip
              velit culpa est eiusmod adipisicing dolore qui Lorem.Esse ad id
              aliquip velit culpa est eiusmod adipisicing dolore qui Lorem.Esse
              ad id aliquip velit culpa est eiusmod adipisicing dolore qui
              Lorem.Esse ad id aliquip velit culpa est eiusmod adipisicing
              dolore qui Lorem.Esse ad id aliquip velit culpa est eiusmod
              adipisicing dolore qui Lorem.Esse ad id aliquip velit culpa est
              eiusmod adipisicing dolore qui Lorem.Esse ad id aliquip velit
              culpa est eiusmod adipisicing dolore qui Lorem.
            </Text>
          </View>
        </ScrollView>

        <View padding={10}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Integredients</Text>

          <Text>- Exmple 1</Text>
          <Text>- Exmple 2</Text>
          <Text>- Exmple 3</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Youtube video goas here !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
