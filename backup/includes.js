
function includes(component){
    fetch(component)
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforebegin', data);
    });
}