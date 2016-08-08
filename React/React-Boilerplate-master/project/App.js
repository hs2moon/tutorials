var React = require('react');
var ReactDOM = require('react-dom');
var Canvas = require('./Canvas');
var Input = require('./Input');
var List = require('./List');
var List2 = require('./List2');
var Reset = require('./Reset');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
        <Canvas />
        <Input />
        <List />
        <List2 />
        <Reset />
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
