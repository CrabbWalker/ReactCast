//Define a class
var Badge = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
    {this.props.title}<span className="badge">{this.props.number}</span>
            </button>
  }
  });

var Thumbnail = React.createClass({
render : function() {
  return <div className="thumbnail">
  <img src={this.props.imageUrl} />
      <div className="caption">
      <h3>{this.props.header}</h3>
      <p>{this.props.description}</p>
        <p>
        <Badge title ={this.props.title} number={this.props.number} />
        </p>
      </div>
    </div>
    }
});
//this.props allows you to change from static to dynamic

var options = {
title: 'See Tutorials',
number: 32,
header: 'Learn React',
description: 'React is a JS library of complete awesomeness',
imageUrl: 'https://facebook.github.io/react/img/logo_og.png'
};
//React will render this class
var element= React.createElement(Thumbnail, options);

//Once React renders this, it'll store it within body tags
React.render(element, document.querySelector('.target'))