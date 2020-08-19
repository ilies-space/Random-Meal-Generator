import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

//shaking :
import RNShake from 'react-native-shake';
//gride :
import {Col, Row, Grid} from 'react-native-easy-grid';

//components
import {MealImage} from './src/Componenets/Image';
import {Instruction} from './src/Componenets/Instruction';
import {Ingrediants} from './src/Componenets/Ingrediants';
import {YoutubeDisplayer} from './src/Componenets/YoutubeDisplayer';
//
import Icon from 'react-native-vector-icons/AntDesign';

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
        //default screen:
        setcurrentScreen(<Instruction instructions={instructions} />);
        setbtn1Style('#FF8A00');
        settxt1Style('white');
        //
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        //
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
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

  const [currentScreen, setcurrentScreen] = useState(
    <Instruction instructions={instructions} />,
  );

  //
  const [VideoGrid, setVideoGrid] = useState(3);

  //

  const [btn1Style, setbtn1Style] = useState('#FF8A00');
  const [txt1Style, settxt1Style] = useState('white');

  const [btn2Style, setbtn2Style] = useState('#F0F6F5');
  const [txt2Style, settxt2Style] = useState('#9DB4A0');

  const [btn3Style, setbtn3Style] = useState('#F0F6F5');
  const [txt3Style, settxt3Style] = useState('#9DB4A0');

  function UpdatebtnStyle(selectedBtn) {
    switch (selectedBtn) {
      case 1:
        setbtn1Style('#FF8A00');
        settxt1Style('white');
        //
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        //
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
        break;

      case 2:
        setbtn2Style('#FF8A00');
        settxt2Style('white');
        //
        setbtn1Style('#F0F6F5');
        settxt1Style('#9DB4A0');
        //
        setbtn3Style('#F0F6F5');
        settxt3Style('#9DB4A0');
        break;

      case 3:
        setbtn3Style('#FF8A00');
        settxt3Style('white');
        //
        setbtn2Style('#F0F6F5');
        settxt2Style('#9DB4A0');
        //
        setbtn1Style('#F0F6F5');
        settxt1Style('#9DB4A0');
        break;

      default:
        break;
    }
  }

  const LoadVideo = () => {
    setcurrentScreen(
      <YoutubeDisplayer
        playerRef={playerRef}
        YoutubeVideoID={YoutubeVideoID}
        playing={playing}
      />,
    );
    setVideoGrid(4), UpdatebtnStyle(3);
  };
  const LoadIngredients = () => {
    setcurrentScreen(<Ingrediants ingredients={ingredients} />);
    UpdatebtnStyle(2);
    setVideoGrid(3);
  };
  const LoadInstructions = () => {
    setcurrentScreen(<Instruction instructions={instructions} />);
    UpdatebtnStyle(1);
    setVideoGrid(3);
  };

  return (
    <View style={styles.container}>
      <Grid>
        <Row size={2}>
          <View style={{width: '100%'}}>
            <MealImage img={img} />
          </View>
        </Row>
        <Row size={0.8}>
          <View
            style={{
              backgroundColor: '#F0F6F5',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <View style={{width: '90%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 18}}>
                  {title}
                </Text>
                <Text
                  style={{fontSize: 12, color: '#FF8A00', fontWeight: 'bold'}}>
                  {categorie}
                </Text>
              </View>

              <View
                style={{
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="heart" size={24} color="#F26161" />
              </View>
            </View>
          </View>
        </Row>

        <Row size={VideoGrid}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
            }}>
            <View style={{height: '10%', marginVertical: 30}}>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadInstructions()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn1Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt1Style,
                        fontSize: 15,
                      }}>
                      instructions
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadIngredients()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn2Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt2Style,
                        fontSize: 15,
                      }}>
                      ingredients
                    </Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    onPress={() => LoadVideo()}
                    style={{
                      alignItems: 'center',
                      backgroundColor: btn3Style,
                      borderRadius: 20,
                      padding: 10,
                      marginHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        color: txt3Style,
                        fontSize: 15,
                      }}>
                      Video
                    </Text>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
            {currentScreen}
          </View>
        </Row>
        <Row size={0.4}>
          <View
            style={{
              backgroundColor: '#FF8A00',
              padding: 10,
              alignContent: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              flex: 1,
            }}>
            <TouchableOpacity
              style={{alignContent: 'center', alignItems: 'center'}}
              onPress={() => getDataFromApi()}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                Get new meal
              </Text>
            </TouchableOpacity>
          </View>
        </Row>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F6F5',
  },
});

export default App;
