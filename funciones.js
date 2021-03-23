function mostrar(input){
    var img=document.getElementById("img")
    if(input.value=="Ocultar"){
        img.style.visibility="hidden";
        input.value="Mostrar"
    }else{
        img.style.visibility="visible"
        input.value="Ocultar"
    }
}
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.ir-arriba')
        .classList.add('show');
    }else{
        document.querySelector('.ir-arriba')
        .classList.remove('show')
    }
}
document.querySelector('.ir-arriba')
.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});