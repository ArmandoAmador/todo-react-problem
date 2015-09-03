"use strict";

var React = require('react');

var Todo = React.createClass({
  getInitialState: function() {
    return { todo: ["hello"] };
  },

  handleChange: function(event) {
     this.setState({value: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log(this.state.value);
    this.state.todo.push(this.state.value);
    console.log(this.state.todo);
  },

  render: function() {
    var value = this.state.value;

    return (
     <div>
       <ul>
        {this.state.todo.map(function(item){
          return <li>{item}</li>;
        })}
       </ul>
       <form onSubmit={this.handleSubmit}>
         <p>Task</p>
         <input type="text" value={value} onChange={this.handleChange} />
         <input type="submit" value="Post" />
       </form>
     </div>
   );
  }
});
module.exports = Todo;
