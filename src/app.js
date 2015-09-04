"use strict";

var React = require('react');
var Form = require('./components/Form');
var List = require("./components/List");
var Task = require("./components/Task");

var App = React.createClass({
  getInitialState: function() {
    return {tasks: ['Task1', 'Task2', 'Task3']};
  },
  render: function() {
    return (
      <div>
        <h2>TODO</h2>
        <Form />
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
});

module.exports = App;
