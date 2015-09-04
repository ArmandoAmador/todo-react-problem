"use strict";

var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form>
        <input type='text' ref='task' />
        <input type='submit' value='Add Task'/>
      </form>
    );
  }
});

module.exports = Form;
