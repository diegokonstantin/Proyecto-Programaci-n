function login(){

    let email=document.getElementById("email").value;

    let pass=document.getElementById("contraseña").value;

    if(email=="julioolorteguizuloaga@gmail.com" && pass=="1234"){

        window.location="index.html";

        alert("Se inició sesión correctamente");

    } else {

        alert("Emil y/o contraseña incorrectos");

    }

}