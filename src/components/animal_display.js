var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  TouchableHighlight
} = require('react-native');
var images = require('./image_list.js');

import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';


module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight key={this.props.index}  onPress={ () => this.playRecording(this.props.name)}>
      <Image style= {styles.imgwrapper}
      source = {images()[this.props.name]}>
      </Image>
      </TouchableHighlight>
    );
  },
  playRecording: function(animal){
    // AudioRecorder.playRecording();
     AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
    console.log('lion');
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
  imgwrapper: {
    flexDirection: 'row',// takes 5/8ths of available space
  justifyContent: 'space-around',
  alignItems: 'center',


}

});
