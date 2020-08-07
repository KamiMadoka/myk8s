function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    btn.innerHTML = 'Click me';

    element.appendChild(btn);

    return element;
}


document.body.appendChild(component());