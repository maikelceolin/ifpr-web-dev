
function jump (){
    const sonic = document.querySelector('.sonic');
    sonic.classList.add('sonic-jump');
    setTimeout(() => {
        sonic.classList.remove('sonic-jump');
    }, 500);
    
}


function run(){
    const ring = document.querySelector('.ring');
    const thorn = document.querySelector('.thorn');
    const tree = document.querySelector('.tree');
    let speed = document.querySelector('.speed')
    
    while (true){
        // start ring movement
        ring.classList.add('speed');

        // wait 1s and start thorn movement
        setTimeout(() => {
            thorn.classList.add('speed');
        }, 500);

        // wait 1s and start tree movement
        setTimeout(() => {
            tree.classList.add('tree-move');
        }, 500);
        
    }
    


}

document.addEventListener('click', run);
document.addEventListener('keydown', jump);