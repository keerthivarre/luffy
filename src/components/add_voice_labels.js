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
  getInitialState: function() {

      this.state = {index:0}
      return this.state;
  },

  nextImage: function(){
    let index = this.state.index;
    index++;
    if(index > 2){
      index=0;
    }
    this.setState({index:index});
  },

  render: function(){
    let animals = ['monkey','rabbit','sheep'];

    return (
          // <Image source = {require('../img/forest.jpg')} style ={styles.container}>
          <View>
             <Recording_voice name={animals[this.state.index]} index={this.state.index}/>
             <Button text="next" onPress={this.nextImage} />
             </View>
          // </Image>


      );
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
