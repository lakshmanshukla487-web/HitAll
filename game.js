console.log('radhe shyam');

let posx = 5;
let posy = 57;
let speedx = 5;
let speedy = 4;
let score = 0;
let isColliding = false;


document.addEventListener("DOMContentLoaded",()=>{
    const playerName = localStorage.getItem('player-name');
    document.querySelector('.player').innerHTML = `Player : ${playerName}`;
    document.querySelector('.score').innerHTML = `Score: ${0}`
    

    bottomBar();
    game();
});


function game() {

    // Ball positioning in X axis
    if ((posx + 25) / 2.1 > document.body.getBoundingClientRect().width || ((posx + 25)) < document.body.getBoundingClientRect().x) {
        speedx = -speedx;
    }
    posx = posx + speedx;

    document.getElementById('ball').animate(
        [
            { transform: `translateX(${posx}px)` }
        ],
        {
            duration: 1000,
            easing: 'linear'
        }
    );



    // Ball positioning in Y axis
    if (((posy + 25) / 1.8) > document.body.getBoundingClientRect().height || ((posy + 25)) < document.body.getBoundingClientRect().y) {
        speedy = -speedy;
    }
    posy = posy + speedy;
    document.getElementById('ball').animate(
        [
            { transform: `translateY(${posy}px)` }
        ],
        {
            duration: 1000,
            easing: 'linear'
        }
    );





    // Bounce off the paddle and game over logic
    let ball = document.querySelector('.ball').getBoundingClientRect();
    let btbar = document.querySelector('.btbar').getBoundingClientRect();
    const verticalOverlap = ball.bottom >= btbar.top;
    const xgrtalign = ball.x >= btbar.x;
    const xlssalign = ball.x <= btbar.x;

    if (verticalOverlap) {
        
            if(xgrtalign || xlssalign){
                let diff1 = ball.x - btbar.x; 
                let diff2 = btbar.x - ball.x;
                if(diff1 <= 35 && diff2 <= 35){
                    
                    if(!isColliding){
                        score = score+1;
                        speedx = speedx+2;
                        speedy = speedy+2;
                    }

                    isColliding = true;
                
                }
                else if(diff1 > 100 || diff2 > 100){
                    speedx = 0;
                    speedy = 0;
                    window.location.href = 'gameover.html';
                }
            }
        
    }
    else{
        isColliding = false;
    }
    
    localStorage.setItem('score',score);
    document.querySelector('.score').innerHTML = `Score: ${score}`;
                        
    requestAnimationFrame(game)
}




function bottomBar() {
    let barposx = 5;
    let barspeed = 30;
    document.body.addEventListener('keydown', function(event){
        if (event.key === 'ArrowLeft') {
            barposx = barposx - barspeed;
            if(Math.floor(document.querySelector('.btbar').getBoundingClientRect().left)-10 < document.body.getBoundingClientRect().x){
                document.querySelector('.btbar').style.left = `0px`;
                barposx = 5;
            }else{
                document.querySelector('.btbar').style.left = `${barposx}px`;
            }
        }
        else if(event.key === 'ArrowRight'){
            barposx = barposx + barspeed;
            if(document.querySelector('.btbar').getBoundingClientRect().right+30 > document.body.getBoundingClientRect().width){
                document.querySelector('.btbar').style.right = `0px`;
                barposx = document.body.getBoundingClientRect().width-40;
            }
            else{
                document.querySelector('.btbar').style.left = `${barposx}px`;
            }
        }
});

}
























    // if (posy < Math.floor(document.body.getBoundingClientRect().height / 1.1)) {
    //     // let currentball = document.querySelector('.ball').getBoundingClientRect().right;
    //     // let prevball;
    //     let barspeed = 5;
    //     let ballx = document.querySelector('.ball').getBoundingClientRect().left;
    //     let topbarx = document.querySelector(".topbar").getBoundingClientRect().left;
    //     let ballxright = document.querySelector('.ball').getBoundingClientRect().right;
    //     let topbarxright = document.querySelector('.topbar').getBoundingClientRect().right;
    //     let diffleft = ballx - topbarx;
    //     let diffright = ballxright - topbarxright;
    //     let barmove = diffleft + topbarx;
    //     let barmoveright = diffright + topbarxright;
        
    //     // console.log(barmove);

    //     if ((topbarx + 100) > document.body.getBoundingClientRect().right) {
    //         document.body.style.overflow = 'hidden';
    //         topbarx = topbarx+speedx;
    //     }
    //     // if (rightbounce>0) {
    //         document.querySelector('.topbar').animate(
    //             [
    //                 { transform: `translateX(${barmove}px)` },
    //             ],
    //             {
    //                 duration: 500,
    //                 easing: 'linear'
    //             });
    //     // } else {
    //     //     document.querySelector('.topbar').animate(
    //     //         [
    //     //             { transform: `translateX(${barmove}px)` },
    //     //         ],
    //     //         {
    //     //             duration: 500,
    //     //             easing: 'linear'
    //     //         });
    //     // }

    // }
    // else {
    //     document.querySelector('.topbar').animate(
    //         [
    //             { transform: `translateX(${Math.floor(document.body.getBoundingClientRect().width / 2.5)}px)` },
    //         ],
    //         {
    //             duration: 1000,
    //             easing: 'linear'
    //         }
    //     );
    // }
