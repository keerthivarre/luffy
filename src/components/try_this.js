'use strict';
// import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

import {animalList} from './image_list'
var React = require('react');
var {AudioRecorder,AudioPlayer, AudioUtils} = require('react-native-audio');
import {playRecording} from '../common/recording.js';


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  Navigator,
} = require('react-native');

import Swiper from 'react-native-swiper';


var Button = require('../common/button');
var Animal_display = require('./animal_display.js');



module.exports = React.createClass({
  getInitialState: function() {

      this.state = {
        index:0,

      }
      return this.state;
  },
  nextElements: function() {
  //  let animals = ['monkey','rabbit','sheep','elephant','lion','goat'];
    let index = this.state.index;
    index++;
    if(index >= animalList.length){
      index=0;
    }
    this.setState({index:index});
    },
  render: function(){
    //let animals = ['monkey','rabbit','sheep','elephant','lion','goat'];

    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>


      <Swiper style={styles.wrapper} showsButtons={true} onMomentumScrollEnd= {(e, state,context) => {playRecording(animalList[context.state.index])}}>
      {
      animalList.map(function(animal,index){
        return <Animal_display name={animal} index={index}/>
      })
    }
      </Swiper>
      </Image>

            );




},
gotoAddVoice: function() {
  this.props.navigator.push({name: 'add_voice'});
},
goToHomepage: function() {
  this.props.navigator.push({name: 'homepage'});
}

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent:'space-around',
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
  },
  wrapper:{}
});
