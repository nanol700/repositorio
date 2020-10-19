
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});


function validarFormulario(evento) {
   evento.preventDefault();
    var usuario = document.getElementById('email').value;
    var claves = document.getElementById('clave').value;
    // var filtro=  /^@([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filtro = /^([a-zA-Z0-9_\.\-])+\@/;

    if (usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        email.focus();
        return false;
    } else if (!filtro.test(email.value)) {
        alert('email invalido falta el @');
        email.focus();
        return false;

    }

    if (claves.length == 0) {
        alert('La clave no es válida');
        clave.value = " ";
        clave.focus();
        return false;
    }
    else {
        alert('Formulario valido !!!');
        document.getElementById("formulario").reset();
       return true;
      
     
    }

   this.submit();

}


