import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const makeQuote = () =>{

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
