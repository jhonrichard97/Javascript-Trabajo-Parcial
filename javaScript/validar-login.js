class Usuario {
    nomUsuario;
}

function validar() {
    let usuario = document.getElementById('inputEmail').value;
    let contrasena = document.getElementById('inputPassword').value;

    //validar correo
    var ExpRegUsuario = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (usuario == null || usuario.length == 0) {
        document.getElementById('mensajeEmail').innerHTML = "Ingresar correo (obligatorio)";
        document.getElementById('mensajeEmail').style.color = "red";
        location.href = "#inputEmail";
        return false;
    } else if (usuario.match(ExpRegUsuario) == null) {
        document.getElementById('mensajeEmail').innerHTML = "Ingresar correo valido";
        document.getElementById('mensajeEmail').style.color = "red";
        location.href = "#inputEmail";
        return false;
    } else {
        document.getElementById('mensajeEmail').innerHTML = "";
    }

    //validar contraseña
    if (contrasena == null || contrasena.length == 0) {
        document.getElementById('mensajeContrasena').innerHTML = "Ingresar contraseña (obligatorio)";
        document.getElementById('mensajeContrasena').style.color = "red";
        location.href = "#inputPassword";
        return false;
    } else {
        document.getElementById('mensajeContrasena').innerHTML = "";
    }

    const usuario1 = new Usuario();
    usuario1.nomUsuario = usuario;
    alert(usuario1.nomUsuario);
}