import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';

const App: () => React$Node = () => {
  // functions goas here

  const [title, setTitle] = useState('Title Exmple !');
  const [img, setImg] = useState('img Exmple !');
  const [instructions, setInstructions] = useState(
    'Instruction exmple Ipsum duis velit id laborum culpa magna magna aute culpa Culpa eiusmod proident incididunt ut dolore dolor esse culpa excepteur reprehenderit ad anim sint..',
  );

  return (
    <View style={styles.container}>
      <Button
        title="get meal !"
        onPress={() => console.log('Get randome MEal')}
      />
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
          <Text>" {img} "</Text>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: 'gray',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>" {title} "</Text>
          <Text style={{fontSize: 12}}>" Category "</Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1, width: '100%'}}>
        <ScrollView
          style={{width: '100%', padding: 10, backgroundColor: 'red', flex: 1}}>
          <View style={{padding: 10, backgroundColor: 'red'}}>
            <Text>{instructions}</Text>
          </View>
        </ScrollView>

        <View style={{width: '100%'}}>
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
