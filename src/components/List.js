"use strict";

var React = require('react');
var Task = require('./Task');

var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.tasks.map(function(task){
          return <Task>{task}</Task>;
        })}
      </ul>
    );
  }
});

module.exports = List;
