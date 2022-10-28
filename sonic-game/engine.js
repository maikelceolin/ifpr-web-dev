
function jump (){
    const sonic = document.querySelector('.sonic');
    sonic.classList.add('sonic-jump');
    setTimeout(() => {
        sonic.classList.remove('sonic-jump');
    }, 500);
    
}

document.addEventListener('click', jump)
