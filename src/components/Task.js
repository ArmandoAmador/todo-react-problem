"use strict";

var React = require('react');

var Task = React.createClass({
  render: function() {
    return (
      <div>
        <li>I should be a task item</li>
      </div>
    );
  }
});

module.exports = Task;
