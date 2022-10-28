

function jump (){
    const sonic = document.querySelector('#sonic');
    sonic.classList.add('sonic-jump');
}

document.addEventListener('keydown', jump())