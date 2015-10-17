//Define a class
var HelloWorld = React.createClass({
    render: function() {
    return <div>
    HelloWorld!
    </div>
    }
})

//React will render this class
var element= React.createElement(HelloWorld);

//Once React renders this, it'll store it within body tags
React.render(element, document.body)