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

//yt
import YoutubePlayer from 'react-native-youtube-iframe';
//shaking :
import RNShake from 'react-native-shake';

//

const App: () => React$Node = () => {
  //
  useEffect(() => {
    RNShake.addEventListener('ShakeEvent', () => {
      console.log('shaked !!');
    });
  });
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

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
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
        <ScrollView style={{width: '100%', padding: 10, height: 80}}>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Instructions</Text>

            <Text>{instructions}</Text>
          </View>
        </ScrollView>
        <View style={{padding: 10, flex: 1, width: '100%'}}>
          <View style={{marginLeft: 20, paddingVertical: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Integredients
            </Text>
            <ScrollView style={{width: '100%', padding: 10, height: 120}}>
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
          <YoutubePlayer
            ref={playerRef}
            height={300}
            width={400}
            videoId={YoutubeVideoID}
            play={playing}
            onChangeState={(event) => console.log(event)}
            onReady={() => console.log('ready')}
            onError={(e) => console.log(e)}
            onPlaybackQualityChange={(q) => console.log(q)}
            volume={50}
            playbackRate={1}
            initialPlayerParams={{
              cc_lang_pref: 'us',
              showClosedCaptions: true,
            }}
          />
        </View>

        <View style={{margin: 10}}>
          <Button title="get meal !" onPress={() => getDataFromApi()} />
        </View>
      </View>
    );
  }
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
