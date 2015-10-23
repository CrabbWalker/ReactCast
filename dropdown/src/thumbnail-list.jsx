var React = require('react');
var Thumbnail = require('./thumbnail');

//telling browserify to render this before anything else

module.exports = React.createClass({

//module.exports allows other modules access, instead of defining a local variable with var

render : function() {
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return <Thumbnail {...thumbnailProps} />
  });

  return <div>
  {list}
  </div>
}
});