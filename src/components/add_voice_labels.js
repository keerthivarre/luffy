'use strict';
import  animals,{animalList} from './image_list'
var React = require('react');


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  Navigator,
} = require('react-native');

var Button = require('../common/button');
var Recording_voice = require('./recording_voice.js');
// var animals,{animalList} = require('./image_list')


module.exports = React.createClass({
  getInitialState: function() {

      this.state = {index:0}
      return this.state;
  },

  nextImage: function(){
    let index = this.state.index;
    index++;
    if(index > 5){
      index=0;
    }
    this.setState({index:index});
  },

  render: function(){
  console.log(animalList);

    //let animals = ['monkey','rabbit','sheep','elephant','lion','goat'];

    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>

      <Recording_voice name={animalList[this.state.index]} index={this.state.index}/>
      <Button text = {'BACK'} onPress={this.goToHomepage}/>
      <Button text = "NEXT" onPress = {this.nextImage}/>
      </Image>


      );
    },
    goToHomepage: function() {
      this.props.navigator.push({name: 'homepage'});
    }


});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    // alignItems: 'center',
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
