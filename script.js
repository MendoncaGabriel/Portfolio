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