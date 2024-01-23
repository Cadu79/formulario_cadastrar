function cadastrar() {

    var name = document.getElementById('name').value;
    var telefone = document.getElementById('telefone').value;

    if(name == "admin" && telefone == "admin") {
        alert('Sucesso');
        
    }else{
        alert('Usuário ou senha incorretos');
    }

}

