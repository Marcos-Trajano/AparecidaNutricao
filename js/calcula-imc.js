var titulo = document.querySelector("h1");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var textImc = paciente.querySelector(".info-imc");
    textImc.textContent = imc;

    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

    if(!pesoValido){
        var pesoValido = false;
        textImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        var alturaValida = false;
        textImc.textContent = "Altura invalida!"
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso,altura);

        var textImc = paciente.querySelector(".info-imc");

        textImc.textContent = imc;
    }
}

function calculaImc(peso,altura){

    var imc = 0 

    imc = peso / (altura * altura)

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){

    if(altura<3.00 && altura>=0){
        return true;
    }else{
        return false;
    }
}

