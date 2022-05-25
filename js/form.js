var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosFormulario(form);
    var pacienteTr = buildTr(paciente);

    var errores = validarPaciente(paciente);

    if(errores.length > 0){
        
        exhibirMenajesErrores(errores);
        return;

    }

    var table = document.querySelector("#tabla-pacientes");
    table.appendChild(pacienteTr);

    form.reset(); 

    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = "";
    
})

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = buildTr(paciente);
    var table = document.querySelector("#tabla-pacientes");
    table.appendChild(pacienteTr);

}

function capturarDatosFormulario(form){

    var paciente = {

        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculateIMC(form.peso.value,form.altura.value)
    }

    return paciente;

}
 
function buildTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    
    pacienteTr.appendChild(buildTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(buildTd(paciente.altura,"info-altrura"));
    pacienteTr.appendChild(buildTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(buildTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(buildTd(paciente.imc,"info-imc"));

    return pacienteTr;
    
        
}

function buildTd(dato,clase){

    var td = document.createElement("td");
    td.classList.add(clase)
    td.textContent = dato;
    
    return td;

}

function validarPaciente(paciente){

    var errores = [];

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacio");
    }
    if(paciente.gordura.length == 0){
        errores.push("El % de godura no puede estar vacio");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }

    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");

    }

    return errores;
}

function exhibirMenajesErrores(errores){

    var ul = document.querySelector("#mensaje-errores");
    ul.innerHTML = "";
    
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
        
    });
    


}