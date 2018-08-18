import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,AppRegistry, Alert } from 'react-native';
const makeQuote = () =>{

var numberRandom = Math.random();
numberRandom = Math.floor(numberRandom * 20);

var quotes = Array();
quotes[0] = 'Life is like riding a bicycle. To keep your balance, you must keep moving.';
quotes[1] = 'Giving up is the only sure way to fail.';
quotes[2] = 'Believe you can and you re halfway there.';
quotes[3] = 'Watch your thoughts, for they become words. Watch your words, for they become actions. Watch your actions, for they become habits. Watch your habits, for they become character. Watch your character, for it becomes your destiny.';
quotes[4] = 'Stay away from negative people. They have a problem for every solution.';
quotes[5] = 'A good head and a good heart are always a formidable combination.';
quotes[6] = 'Strength does not come from physical capacity. It comes from an indomitable will.';
quotes[7] = 'You cant wait for inspiration. You have to go after it with a club.';
quotes[8] = 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.';
quotes[9] = 'A winner is a dreamer who never gives up.';
quotes[10] = 'A person who never made a mistake never tried anything new.';
quotes[11] = 'There are no limits. There are only plateaus. And you must not stay there. You must go beyond them.';
quotes[12] = 'The past cannot be changed. The future is yet in your power.';
quotes[13] = 'If you have everything under control, you are not moving fast enough';
quotes[14] = 'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.';
quotes[15] = 'The scariest moment is always just before you start.';
quotes[16] = 'Always remember that you are absolutely unique. Just like everyone else.';
quotes[17] = 'If you plan for one year, plant rice. If you plan for ten years, plant trees. If you plan for 100 years, educate humanity.';
quotes[18] = 'You cannot swim for new horizons until you have courage to lose sight of the shore.';
quotes[19] = 'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.';
quotes[20] = 'If you dont turn your life into a story, you just become a part of someone else story.';

var choseQuote = quotes[numberRandom];
Alert.alert('',choseQuote);
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <Text style={styles.title}>My Favorite Quotes</Text>
            <TouchableOpacity style={styles.button} onPress={makeQuote}>
            <Text  style={styles.buttonText} >Create a Quote</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  button:{
    borderRadius:10,
    marginTop:20,
    paddingHorizontal:40,
    paddingVertical:10,
    backgroundColor:'rgb(4, 108, 74)',
  },
  buttonText:{
    color:'white',
    fontSize:18,
  }
});
