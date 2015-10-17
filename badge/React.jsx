//Define a class
var Badge = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
    {this.props.title}<span className="badge">{this.props.number}</span>
            </button>
//this.props allows you to change from static to dynamic
  }
})

var options = {
title: 'Inbox',
number: 32
};
//React will render this class
var element= React.createElement(Badge, options);

//Once React renders this, it'll store it within body tags
React.render(element, document.body)