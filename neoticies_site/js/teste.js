const my_element = doument.querySelector('p');

my_element.addEventListener('click', updateName);

function updateName(){
    let nome = prompt("Digite o novo nome: ")
    my_element.textContent = 'Nome da Pessoa: ' + nome;
}