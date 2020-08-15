import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const App: () => React$Node = () => {
  // functions goas here

  function getDataFromApi() {
    console.log('getDataFromApi');
  }

  //const goas here
  const [meal, setMeal] = useState();

  const [title, setTitle] = useState('Title Exmple !');
  const [img, setImg] = useState(
    'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
  );
  const [instructions, setInstructions] = useState(
    'Instruction exmple Ipsum duis velit id Do sit Et ad Nulla veniam in dolor commodo culpa ex excepteur magna reprehenderit occaecat dolor excepteur laborum. Incididunt qui nisi exercitation ullamco officia consectetur labore. Consequat proident excepteur aliqua nulla id dolore laboris et mollit nostrud fugiat tempor qui. Ea laboris nisi occaecat aliqua eu. Do elit ut ad quis occaecat. aliqua veniam sit. elit sunt est ipsum. laborum culpa magna magna aute culpa Culpa eiusmod proident incididunt ut dolore dolor esse culpa excepteur reprehenderit ad anim sint..',
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          width: '100%',
        }}>
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
        <View
          style={{
            height: 150,
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>" {title} "</Text>
          <Text style={{fontSize: 12}}>" Category "</Text>
          <Text style={{fontSize: 12}}>" strArea "</Text>
        </View>
      </View>
      <View style={{padding: 10, flex: 1, width: '100%'}}>
        <ScrollView style={{width: '100%', padding: 10, flex: 1}}>
          <View style={{padding: 10}}>
            <Text>{instructions}</Text>
          </View>
        </ScrollView>

        <View style={{marginLeft: 20, paddingVertical: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Integredients</Text>

          <Text>- Exmple 1</Text>
          <Text>- Exmple 2</Text>
          <Text>- Exmple 3</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
        }}>
        <Text>Youtube video goas here !</Text>
      </View>

      <View style={{margin: 10}}>
        <Button title="get meal !" onPress={() => getDataFromApi()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default App;
