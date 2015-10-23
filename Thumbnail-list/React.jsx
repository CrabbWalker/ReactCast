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
  return <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
    <img src={this.props.imageUrl} />
        <div className="caption">
        <h3>{this.props.header}</h3>
        <p>{this.props.description}</p>
          <p>
          <Badge title ={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
    }
});

var ThumbnailList = React.createClass({
render : function() {
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return <Thumbnail {...thumbnailProps} />
  });

  return <div>
  {list}
  </div>
}
});
//this.props allows you to change from static to dynamic

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