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


module.exports = React.createClass({
  render: function(){
    return (
      <Image source = {require('../img/forest.jpg')} style ={styles.container}>
        <Text style ={styles.text}> LEARN ANIMALS</Text>
        <Text style ={styles.text}> CHOOSE YOUR LANGUAGE</Text>
        <View style = {styles.buttonwrapper}>
          <Button text={'ADD VOICE LABELS'} onPress={this.gotoAddVoice} />
          <Button text={'START training'} onPress={this.gotoTraining} />
          <Button text={'START TEST SEQUENCE'} onPress={this.gotoTest} />
        </View>
    </Image>
  );

},
gotoAddVoice: function() {
  this.props.navigator.push({name: 'add_voice'});
},
gotoTraining: function() {
  this.props.navigator.push({name: 'training'});
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
