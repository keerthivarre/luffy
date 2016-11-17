'use strict';
// import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

var React = require('react');
var {AudioRecorder,AudioPlayer, AudioUtils} = require('react-native-audio');


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');

var Button = require('../common/button');
var Animal_display = require('./animal_display.js');



module.exports = React.createClass({
  render: function(){
    let animals = ['monkey','rabbit','sheep'];

    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>

          {animals.map(function(animal,index){
            return <Animal_display name={animal} index={index}/>

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
  }
});
