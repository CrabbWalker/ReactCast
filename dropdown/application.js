var options = {

thumbnailData:
  [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is a JS library of complete awesomeness',
    imageUrl: 'https://facebook.github.io/react/img/logo_og.png'

  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp speeds up your workflow ASAP',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'

}]};
  //it's an array that looks like this: options = {td: [{}, {}, {}]}
//React will render this class
var element= React.createElement(ThumbnailList, options);

//Once React renders this, it'll store it within body tags
React.render(element, document.querySelector('.container'))
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, React.createElement("span", {className: "badge"}, this.props.number)
            )
  }
  });

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
render : function() {
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
  });

  return React.createElement("div", null, 
  list
  )
}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
render : function() {
  return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
    React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
    }
});