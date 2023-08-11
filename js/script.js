const bunfriend = document.querySelector('.bunfriend');

const pipe = document.querySelector('.pipe');


const jump = () => {
    bunfriend.classList.add('jump');

    setTimeout(() =>{
        bunfriend.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => { 

    const pipePosition = pipe.offsetLeft;
    const bunfriendPosition = +window.getComputedStyle(bunfriend).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && bunfriendPosition < 80){

        pipe.style.animation = 'none'; 
        pipe.style.left =`${pipePosition}px`; 
  
        bunfriend.style.animation = 'none';
        bunfriend.style.bottom =`${bunfriendPosition}px`;  

        bunfriend.src = './images/gameover.png';
        bunfriend.style.width = '160px';
        
        //se precisar ajustar margin usar os comandos style.marginLeft 
        clearInterval(loop);
    }

 
},20) 


document.addEventListener('keydown', jump);