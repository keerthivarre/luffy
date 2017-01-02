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
import images from './image_list';

module.exports = React.createClass({
  render: function(){
    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>
      <TouchableHighlight key={this.props.index}  onPress={ () => this.playRecording('rabbit')}>
      <Image source = {require('../img/rabbit.jpg')} style = {styles.image}>
      </Image>
      </TouchableHighlight>
      <Image style= {styles.imgwrapper}
      source = {images()[this.props.name]}>
      </Image>
    </Image>
  );

},
gotoAddVoice: function() {
  this.props.navigator.push({name: 'add_voice'});
},
playRecording: function(animal){
   AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
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
    alignItems: 'center'
  },
  image: {
    marginTop: 20,

  }
});
