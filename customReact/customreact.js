function customRender  (reactElemnt, container) {
    const domElemnt = document.createElement(reactElemnt.type);
    domElemnt.innerHTML = reactElemnt.Children;
    domElemnt.setAttribute('href', reactElemnt.props.href);
    domElemnt.setAttribute('target', reactElemnt.props.target);

    container.appendChild(domElemnt);
}

    const reactElemnt = {
    type : 'a',
    props :{
        href : 'https://www.google.com',
        target : '_blank',
    },
    Children: 'Click here',
}



const container = document.querySelector('#root');

customRender(reactElemnt, container);
