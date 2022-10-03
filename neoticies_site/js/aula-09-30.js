const my_element = doument.querySelector('p');



// my element is the variable
my_element.addEventListener('click', updateName);



// create a function
function updateName(){
    let nome = prompt("Digite o novo nome: ")
    my_element.textContent = 'Nome da Pessoa: ' + nome;
}