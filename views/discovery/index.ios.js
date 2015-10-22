/**
 * Created by guguyanhua on 10/22/15.
 */
var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

var fiteam = React.createClass({
  render: function() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            发现精彩
          </Text>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = fiteam;