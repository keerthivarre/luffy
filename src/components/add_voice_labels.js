'use strict';
var React = require('react');


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');

var Button = require('../common/button');
var Recording_voice = require('./recording_voice.js');



module.exports = React.createClass({
  render: function(){
    let animals = ['monkey','rabbit','sheep'];

    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>

          {animals.map(function(animal_name,index){
            return <Recording_voice name={animal_name} index={index}/>

          })
        }
        </Image>
  );


}

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
    alignItems: 'center',
    flexDirection: 'row'
  }
});
