function validar() {
    var name = document.getElementById("name");
    if (name.value == "") {
        alert("Nome não informado");
        nome.focus();
    }
    var lastname = document.getElementById("last-name");
    if (lastname.value == "") {
        alert("Sobrenome não informado");
        lastname.focus();
    }
    var email = document.getElementById("e-mail");
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
    }
    var phone = document.getElementById("phone");
    if (phone.value == "") {
        alert("Telefone não informado");
        phone.focus();
    }
    var message = document.getElementById("message");
    if (message.value == "") {
        alert("Mensagem não informada");
        message.focus();
    }
    else alert("Formulário enviado!");
}