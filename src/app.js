"use strict";

var React = require('react');
var Form = require('./components/Form');
var List = require("./components/List");


var App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>TODO</h2>
        <Form />
        <List />
      </div>
    );
  }
});

module.exports = App;
