function logar(){

    var login = document.getElementById('emailOrCPF').value;
    var senha = document.getElementById('password').value


    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}