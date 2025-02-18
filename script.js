function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const plano = document.getElementById("plano").value;
    
    if (nome && sobrenome && dataNascimento && email && telefone && endereco && plano) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
