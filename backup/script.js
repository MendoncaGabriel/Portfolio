let menuMobile = document.getElementById('menuMobile')
let Menu = false
function menu(){
    if(Menu == false){
        Menu = true
        menuMobile.style.display = 'block'


    }else{
        Menu = false
        menuMobile.style.display = 'none'

    }
}


function copyToClipboard(text, alerta) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert(alerta)
}