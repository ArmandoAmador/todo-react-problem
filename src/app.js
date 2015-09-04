"use strict";

var React = require('react');
var Form = require('./components/Form');
var List = require("./components/List");


var App = React.createClass({
  render: function() {
    return (
      <div>
        <h2>TODO</h2>
        <p>I should be a form</p>
        <p>I should be a list of tasks</p>
      </div>
    );
  }
});

module.exports = App;
