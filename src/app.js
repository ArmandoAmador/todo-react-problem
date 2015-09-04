"use strict";

var React = require('react');
var Form = require('./components/Form');
var List = require("./components/List");
var Task = require("./components/Task");

var App = React.createClass({
  getInitialState: function() {
    return {tasks: []};
  },

  updateTasks: function(newTask) {
    this.setState({tasks: this.state.tasks.concat([newTask])});
  },

  render: function() {
    return (
      <div>
        <h2>TODO</h2>
        <Form onFormSubmit={this.updateTasks} />
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
});

module.exports = App;
