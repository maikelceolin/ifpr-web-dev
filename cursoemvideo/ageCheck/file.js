
function checkYear() {

    const anoNasc = document.getElementById('anoNasc');
    const date = new Date();
    const ano = date.getFullYear();
    let idade = ano - Number(anoNasc.value);

    const fsex = document.getElementsByName('radsex');
    var img = document.querySelector('#foto');


    if (fsex[0].checked) {
        if (idade >= 0 && idade <=3) {
            document.getElementById('result').innerHTML = `Bebê com ${idade} anos`;
            img.setAttribute("src","./img/baby-boy.png");
            document.body.style.backgroundColor = "#a7a9fa";
            document.getElementById("titulo").style.color = "#061745";


        } else if (idade <= 14){
            document.getElementById('result').innerHTML = `Menino com ${idade} anos`;
            img.setAttribute("src","./img/kid-man.png");
            document.body.style.backgroundColor = "#7376fa";
            document.getElementById("titulo").style.color = "#061745";

        } else if (idade > 12 && idade < 30) {
            document.getElementById('result').innerHTML = `Rapaz com ${idade} anos`;
            img.setAttribute("src","./img/young-man.png");
            document.body.style.backgroundColor = "#5256f7";
            document.getElementById("titulo").style.color = "#b6c6f2";

        } else if (idade >= 30 && idade < 60){
            document.getElementById('result').innerHTML = `Homem com ${idade} anos`;
            img.setAttribute("src","./img/man.png");
            document.body.style.backgroundColor = "#1317a1";
            document.getElementById("titulo").style.color = "#b6c6f2";

        } else if (idade >= 60 && idade <= 110) {
            document.getElementById('result').innerHTML = `Senhor com ${idade} anos`;
            img.setAttribute("src","./img/elderly-man.png");
            document.body.style.backgroundColor = "#050759";
            document.getElementById("titulo").style.color = "#b6c6f2";

        } else {
            img.setAttribute("src","./img/heaven.png");
            document.getElementById('result').innerHTML = `Que este homem descanse em paz!`;
            document.body.style.backgroundColor = "#a7a9fa";
            document.getElementById("titulo").style.color = "#061745";
        }
       

        
    } else {
        if (idade >= 0 && idade <=3) {
            document.getElementById('result').innerHTML = `Bebê com ${idade} anos`;
            img.setAttribute("src","./img/baby-girl.png");
            document.body.style.backgroundColor = "#f7c1e9";
            document.getElementById("titulo").style.color = "#8e0b6b";
            
        } else if (idade <= 14){
            document.getElementById('result').innerHTML = `Menina com ${idade} anos`;
            img.setAttribute("src","./img/kid-woman.png");
            document.body.style.backgroundColor = "#f291d8";
            document.getElementById("titulo").style.color = "#8e0b6b";

        } else if (idade > 12 && idade < 30) {
            document.getElementById('result').innerHTML = `Moça com ${idade} anos`;
            img.setAttribute("src","./img/young-woman.png");
            document.body.style.backgroundColor = "#b04d96";
            document.getElementById("titulo").style.color = "#f7bee8";

        } else if (idade >= 30 && idade < 60){
            document.getElementById('result').innerHTML = `Mulher com ${idade} anos`;
            img.setAttribute("src","./img/woman.png");
            document.body.style.backgroundColor = "#a3488b";
            document.getElementById("titulo").style.color = "#f7bee8";

        } else if (idade >= 60 && idade <= 110) {
            document.getElementById('result').innerHTML = `Senhora com ${idade} anos`;
            img.setAttribute("src","./img/elderly-woman.png");
            document.body.style.backgroundColor = "#69084f";
            document.getElementById("titulo").style.color = "#f7bee8";

        } else {
            img.setAttribute("src","./img/heaven.png");
            document.getElementById('result').innerHTML = `Que esta mulher descanse em paz!`;
        }
        
    }

    
    




}