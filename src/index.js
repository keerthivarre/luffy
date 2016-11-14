var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Navigator
} = require('react-native');

var homepage = require('./components/homepage.js');
var add_voice = require('./components/add_voice_labels.js');
var training_sequence = require('./components/training_sequence.js');



var ROUTES = {
  homepage: homepage,
  add_voice: add_voice,
  training:training_sequence,
};

module.exports = React.createClass({
  renderScene : function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route = {route} navigator = {navigator}/>;

  },

  render: function() {
    return (

    <Navigator
    style = { styles.container}
    initialRoute = {{name: 'homepage'}}
    renderScene = {this.renderScene}
    configureScene = {()=> {return Navigator.SceneConfigs.FloatFromRight;}}
    />

  );

  }


});
var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
  }
});
