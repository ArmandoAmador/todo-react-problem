"use strict";

var React = require('react');

var Form = React.createClass({
  getInitialState: function() {
    return {task: ''};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.task);
    this.setState({task: ''});
    return;
  },

  onChange: function(event){
    this.setState({task: event.target.value});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='task' onChange={this.onChange} value={this.state.task} />
        <input type='submit' value='Add Task'/>
      </form>
    );
  }
});

module.exports = Form;
