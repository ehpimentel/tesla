// document = ir no html
// querySelector = busca o que eu quiser que ele busque

var formulario = document.querySelector(".formulario");

function aparecerFormulario() {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".formulario").style.display = "block";
}

function desaparecerFormulario() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".formulario").style.display = "none";
}