
var pacientes = document.querySelectorAll(".paciente");

for(var x = 0; x <= pacientes.length ; x++){
    
    var paciente =  pacientes[x];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso =  tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);


    if(!pesoValido){

         tdPeso.textContent = "peso incorrecto";
         console.log("peso incorrecto")
         pesoValido = false;
         paciente.classList.add("paciente-incorrecto");

    }

    if(!alturaValida){
        
         tdAltura.textContent = "altura incorrecta";
         console.log("altura incorrecto")
         altura = false ; 
         paciente.classList.add("paciente-incorrecto");

     }

    if(pesoValido && alturaValida){
         
        tdIMC.textContent = calculateIMC(peso,altura);
    }   



}

function calculateIMC(peso,altura){
        
    var imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function validarPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){

    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}
