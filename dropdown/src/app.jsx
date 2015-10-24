var React = require('react');
var Dropdown = require('./dropdown')
var options {
title: 'Choose a Dessert' //what should show up on the button to open/close the dropdown
items: [ 'Apple Pie',
        'Peach Cobbler',
        'Coconut Cream Pie', ]
}
//React will render this class
var element= React.createElement(ThumbnailList, options);

//Once React renders this, it'll store it within body tags
React.render(element, document.querySelector('.container'))