'use strict';
// import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

var React = require('react');
var {AudioRecorder,AudioPlayer, AudioUtils} = require('react-native-audio');
import {animalList} from './image_list'

var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');

var Button = require('../common/button');
var Test= require('./test_component.js');


module.exports = React.createClass({
  getInitialState: function(){
    return {animalChosen:0,  animals:animalList.slice(0,4)}
  },


  changeAnimalChosen: function(){
    this.setState({animalChosen:Math.floor(Math.random() * this.state.animals.length)});
  },
  render: function(){

    let animalChosen = this.state.animalChosen;
    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>
      <Button text={"Reload"} onPress= {() => this.changeAnimalChosen() } />

      {this.state.animals.map(function(animal,index){
        return <Test name={animal} index={index} chosen={ animalChosen == index}/>

      })
    }

    </Image>
  );

},
gotoAddVoice: function() {
  this.props.navigator.push({name: 'add_voice'});
},


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  text: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  buttonwrapper: {
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
