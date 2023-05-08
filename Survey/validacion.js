const nombre=document.getElementById("nombres")
const apellido=document.getElementById("apellidos")
const correo=document.getElementById("correo")
const contraseña=document.getElementById("contraseña")
const contraseña2=document.getElementById("contraseña2")
const registroencuesta=document.getElementById("Registro-Encuesta")

Form.dataEventListener("sumit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    parrafo.innerHTL = ""
    if (nombre.value.length <6){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    if (apellido.value.length <6){
        warnings += "El apellido no es valido <br>"
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
    warnings += "El correo no es valido <br>"
    entrar = true
    }
    if(contraseña.value.length <8){
    warnings += "La contraseña no es valido <br>"
    entrar = true;
    }
    if(contraseña2.value.length <8){
        warnings += "La contraseña no es igual a la anterior <br>"
        entrar = true
    }

})

