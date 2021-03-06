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
import images from './image_list.js'

import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';


module.exports = React.createClass({
  render: function() {
    //this plays the recording whenever the image is rendered without clicking on the image
    this.playRecording(this.props.name);
    return (
      <TouchableHighlight key={this.props.index}  onPress={ () => this.playRecording(this.props.name)}>
      <Image style= {styles.imgwrapper}
      source = {images()[this.props.name]}>
      </Image>
      </TouchableHighlight>
    );
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
  imgwrapper: {
    flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',

},


});
