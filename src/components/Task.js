"use strict";

var React = require('react');

var Task = React.createClass({
  render: function() {
    return (
      <li>{this.props.children}</li>
    );
  }
});

module.exports = Task;
