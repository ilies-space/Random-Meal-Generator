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
    fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //
        setTitle(responseJson.meals[0].strMeal);
        //
        setcategorie(responseJson.meals[0].strCategory);
        //
        setArea(responseJson.meals[0].strArea);
        //
        setInstructions(responseJson.meals[0].strInstructions);
        //
        setImg(responseJson.meals[0].strMealThumb);
        //
        setYoutubeLink(responseJson.meals[0].strYoutube);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //const goas here
  const [Youtubelink, setYoutubeLink] = useState('TYoutube Link !');

  const [title, setTitle] = useState('Title Exmple !');

  const [categorie, setcategorie] = useState('category exmple');
  const [area, setArea] = useState('exmple area');

  const [img, setImg] = useState(
    'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
  );
  const [instructions, setInstructions] = useState('instruction Exmple');

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
          <Text style={{fontSize: 12}}> {categorie} </Text>
          <Text style={{fontSize: 12}}> {area} </Text>
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
        <Text> {Youtubelink} </Text>
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
