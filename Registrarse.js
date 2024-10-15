function register(){

    let email=document.getElementById("email").value;

    let pass=document.getElementById("contraseña").value;

    if(email=="" && pass==""){

        alert("Algún campo no fue llenado correctamente");

    } else {

        window.location="index.html";

        alert("Se realizó el registro correctamente");

    }

}