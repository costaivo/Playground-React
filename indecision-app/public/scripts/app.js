'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var app = {
    title: 'Indecision app',
    desc: 'hello from react app'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        { id: 'test' },
        ' ',
        app.desc
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Ivo Costa',
    age: 37,
    location: 'Goa'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}
//Create a templateTwo var JSX expression
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
