var React = require('react');
var ThumbnailList = require('./thumbnail-list');

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