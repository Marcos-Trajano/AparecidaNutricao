var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
    
    //var alvoDoEvento = event.target;
    //var paiDoAlvo = alvoDoEvento.parentNode;
    //paiDoAlvo.remove();
})