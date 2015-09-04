"use strict";

var React = require('react');
var Task = require('./Task');

var List = React.createClass({
  render: function() {
    return (
      <div>
        This should be a list
        <Task />
        <Task />
        <Task />
      </div>
    );
  }
});

module.exports = List;
