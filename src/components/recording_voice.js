'use strict';
var React = require('react');


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  Navigator
} = require('react-native');

var Button = require('../common/button');
var images = require('./image_list.js');
import {AudioPlayer,AudioRecorder,AudioUtils} from 'react-native-audio';

module.exports = React.createClass({
  prepareRecordingPath(audioPath){
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  },
  getAudioRecordingPath: function() {
    return AudioUtils.DocumentDirectoryPath+'/'+this.props.name+'.aac'
  },
  StartPress: function() {
    let audioPath = this.getAudioRecordingPath();
    this.prepareRecordingPath(audioPath);
      AudioRecorder.startRecording();
  },
  getInitialState: function() {
    let animal_name = this.props.name;
      return {
          index: 0,
          audioPath: AudioUtils.DocumentDirectoryPath+'/'+animal_name+'.aac'
    }
  },
  render: function() {
    var animal1 = this.props.name;
    return (
  <View>
   <Image style={styles.imgwrapper}
     source={images()[this.props.name]} >
     </Image>
     <View style = {styles.buttonwrapper}>
       <Button text={'START'} onPress={this.StartPress} />
       <Button text={'STOP'} onPress={this.stopRecording} />
       <Button text={'PLAY'} onPress={this.playRecording} />
     </View>
        </View>
  );

},
onPress: function(){
  var animal1 = this.props.name;
  console.log(animal1[this.state.index]);
},
stopRecording: function(){
  console.log("In stop recording");
  AudioRecorder.stopRecording();
},

playRecording: function(){
  AudioPlayer.play(this.getAudioRecordingPath());
  console.log("In play recording");


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
  },
  imgwrapper: {
    flexDirection: 'row',// takes 5/8ths of available space
  justifyContent: 'space-around',
  alignItems: 'center',


}

});
