var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,

} = require('react-native');

module.exports =React.createClass({
  render: function() {
    return (
      <TouchableHighlight
      style ={styles.button}
      underlayColor ="gray"
      onPress={this.props.onPress}>
      <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }

});

var styles= StyleSheet.create({
buttonText: {
  fontFamily: 'copperplate',
  fontWeight: 'bold',
  fontSize: 18,
  color: 'blue'
},
button: {
  justifyContent: 'center',
  borderColor: 'green',
  borderWidth: 2,
  borderRadius: 5,
  padding: 5,
    marginTop: 10,
}
});
