import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

//shaking :
import RNShake from 'react-native-shake';
import {MealImage} from './src/Componenets/Image';
import {Instruction} from './src/Componenets/Instruction';
import {Ingrediants} from './src/Componenets/Ingrediants';
import {YoutubeDisplayer} from './src/Componenets/YoutubeDisplayer';

//

const App: () => React$Node = () => {
  //
  // useEffect(() => {
  //   RNShake.addEventListener('ShakeEvent', () => {
  //     console.log('shaked !!');
  //   });
  // });
  const [isLoading, setisLoading] = useState(false);

  //
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  //
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
        //setYoutubeLink(responseJson.meals[0].strYoutube);
        setYoutubeVideoID(responseJson.meals[0].strYoutube.substring(32, 43));

        // integredients :
        setingredients([]);
        getIntegredients(responseJson.meals[0]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setisLoading(false));
  }

  //function :
  function getIntegredients(allData) {
    console.log(
      allData[`strIngredient${1}`] + ' /' + allData[`strMeasure${1}`],
    );

    for (let index = 0; index < 20; index++) {
      if (allData[`strIngredient${index}`]) {
        setingredients((prevList) => {
          return [
            {
              strIngredient: allData[`strIngredient${index}`],
              strMeasure: allData[`strMeasure${index}`],
            },
            ...prevList,
          ];
        });

        console.log(
          allData[`strIngredient${index}`] +
            ' /' +
            allData[`strMeasure${index}`],
        );
      }
    }
  }
  //

  //const goas here

  const [ingredients, setingredients] = useState([
    {strIngredient: 'strIngredientExmple'},
  ]);

  const [YoutubeVideoID, setYoutubeVideoID] = useState('youtube id');

  const [title, setTitle] = useState('Title Exmple !');

  const [categorie, setcategorie] = useState('category exmple');
  const [area, setArea] = useState('exmple area');

  const [img, setImg] = useState(
    'https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg',
  );
  const [instructions, setInstructions] = useState('instruction Exmple');

  return (
    <View style={styles.container}>
      <View>
        <Button title="get meal !" onPress={() => getDataFromApi()} />
      </View>
      <ScrollView>
        <MealImage img={img} />
        <Text style={{fontWeight: 'bold', fontSize: 18}}>" {title} "</Text>
        <Text style={{fontSize: 12}}> {categorie} </Text>
        <Text style={{fontSize: 12}}> {area} </Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Instructions</Text>
        <Instruction instructions={instructions} />
        <Text style={{fontWeight: 'bold', fontSize: 18}}>ingredients</Text>
        <Ingrediants ingredients={ingredients} />
        <YoutubeDisplayer
          playerRef={playerRef}
          YoutubeVideoID={YoutubeVideoID}
          playing={playing}
        />
      </ScrollView>
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
