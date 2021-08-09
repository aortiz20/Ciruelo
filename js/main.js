/*con esta variable llamo al boton*/
buttonUp = document.getElementById("button-up");

/*Scroll up*/
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
    
    window.scrollTo (0,0);
    buttonUp.style.transform ="scale(0)"
    }
}

document.getElementById("button-up").addEventListener("click",scrollUp);





/**/ 

/**/

window.onscroll = function (){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 810){
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 810 )
    {
        buttonUp.style.transform = "scale(0)";
    }
}
/**
 * 
 * 
 */


window.addEventListener('scroll', function() {

    let seccion = this.document.getElementById("SeccionComfort");
    let posicion = seccion.getBoundingClientRect().top;
    // console.log(posicion);
    let tamanodePantalla = window.innerHeight/1;

    if(posicion < tamanodePantalla){
        seccion.style.animation = 'mover 1s ease-out'
    }



})

window.addEventListener('scroll', function() {

    let seccion = this.document.getElementById("SeccionSkydive");
    let posicion = seccion.getBoundingClientRect().top;
    // console.log(posicion);
    let tamanodePantalla = window.innerHeight/1;

    if(posicion < tamanodePantalla){
        seccion.style.animation = 'mover 1s ease-out'
    }



})

window.addEventListener('scroll', function() {

    let seccion = this.document.getElementById("SeccionMyself");

    let posicion = seccion.getBoundingClientRect().top;
    // console.log(posicion);
    let tamanodePantalla = window.innerHeight/1;

    if(posicion < tamanodePantalla){
        seccion.style.animation = 'mover 1s ease-out'
    }



})

window.addEventListener('load', function() {

    let seccion = this.document.getElementById("carouselExampleControls");
    
    
        seccion.style.animation = 'mover 3s ease-out'
    



})
