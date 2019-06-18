import React, {Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';
export default class Home extends React.Component {


  render(){
      const { navigate } = this.props.navigation
  return (
    <View style={styles.container}>
     <Text>Suuuck</Text>

     <Button title="Report A Problem"
        onPress={
         () => navigate('ReProblem')
        }
     />
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});


