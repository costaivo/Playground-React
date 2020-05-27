console.log('App.js is running')

// JSX - JavaScript XML
var  app={
    title:'Indecision app',
    desc:'hello from react app'
}
var template =(
<div>  
    <h1>{app.title}</h1>
    <p id="test"> {app.desc}</p> 
    <ol>
        <li>Item One</li>
        <li>Item two</li>
    </ol>
</div>
);

var user={
    name:'Ivo Costa',
    age:37,
    location:'Goa'
}


function getLocation(location){
    if(location){
        return <p>Location:{location}</p>;
    }
}
//Create a templateTwo var JSX expression
var templateTwo = (
    <div>
        <h1>{user.name ? user.name :'Anonymous'}</h1>
        <p>Age:{user.age}</p>
        {getLocation(user.location)} 
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);