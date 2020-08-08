import React from 'react';
import ReactDom from 'react-dom';

function App() {
    return <div>my react</div>
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me';

    element.appendChild(btn);

    return element;
}


document.body.appendChild(component());