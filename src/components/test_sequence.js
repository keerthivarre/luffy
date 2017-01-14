'use strict';
// import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

var React = require('react');
var {AudioRecorder,AudioPlayer, AudioUtils} = require('react-native-audio');
import {animalList} from './image_list'
import {playRecording} from '../common/recording'
import {getRandomChosenAnimal, getRandomSelectionOfAnimals} from '../common/randomAnimal';

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
    return {animalChosen:'',  animals:animalList, animalSelection:[]}
  },


  changeAnimalChosen: function(){
  //  let animalChosen = getRandomChosenAnimal(this.state.animals);
    let animalSelection = getRandomSelectionOfAnimals(animalList);
    this.setState({//animalChosen: animalChosen,
                  //animalsAlreadyChosen:this.state.animalsAlreadyChosen.add(animalChosen),
                  animalSelection: animalSelection});

  //  this.setState({animalChosen:Math.floor(Math.random() * this.state.animals.length)});
  },
  render: function(){
    let random = Math.floor(Math.random()*4);
    console.log(random);
    let animalChosen = this.state.animalSelection[random];
    playRecording(animalChosen);
    let animals = this.state.animalSelection;

    //animals.add(this.state.animalChosen);
    console.log(animals);
    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>
      <Button text={"Reload"} onPress= {() => this.changeAnimalChosen() } />
      {
      animals.map(function(animal,index){
        return <Test name={animal} key={index} chosen={ animalChosen === animal}/>
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
