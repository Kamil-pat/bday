/* ==========================================
   OUR STORY
   Premium Confetti System
========================================== */

class ConfettiPiece {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.size = 6 + Math.random() * 10;

        this.speedX = (Math.random() - .5) * 12;
        this.speedY = -8 - Math.random() * 12;

        this.gravity = .18;

        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - .5) * 18;

        this.opacity = 1;

        this.shape = Math.random() > .8 ? "heart" : "paper";

        this.color = [

            "#ff6fa7",
            "#ff8fc1",
            "#ffd166",
            "#ffffff",
            "#ffc2d9"

        ][Math.floor(Math.random() * 5)];

    }

    update() {

        this.x += this.speedX;

        this.y += this.speedY;

        this.speedY += this.gravity;

        this.rotation += this.rotationSpeed;

        this.opacity -= .004;

    }

    draw(ctx) {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotation * Math.PI / 180);

        ctx.globalAlpha = Math.max(this.opacity,0);

        if (this.shape === "paper") {

            ctx.fillStyle = this.color;

            ctx.fillRect(

                -this.size / 2,

                -this.size / 2,

                this.size,

                this.size

            );

        } else {

            ctx.fillStyle = "#ff6fa7";

            ctx.font = this.size * 1.4 + "px serif";

            ctx.fillText("❤", -this.size / 2, this.size / 2);

        }

        ctx.restore();

    }

}

const confettiCanvas = document.createElement("canvas");

confettiCanvas.id = "confettiCanvas";

confettiCanvas.style.position = "fixed";
confettiCanvas.style.left = "0";
confettiCanvas.style.top = "0";
confettiCanvas.style.width = "100%";
confettiCanvas.style.height = "100%";
confettiCanvas.style.pointerEvents = "none";
confettiCanvas.style.zIndex = "9999";

document.body.appendChild(confettiCanvas);

const confettiCtx = confettiCanvas.getContext("2d");

function resizeConfetti(){

    confettiCanvas.width = innerWidth;

    confettiCanvas.height = innerHeight;

}

resizeConfetti();

window.addEventListener("resize", resizeConfetti);

let confetti = [];

function launchConfetti(){

    confetti = [];

    for(let i=0;i<450;i++){

        confetti.push(

            new ConfettiPiece(

                innerWidth/2,

                innerHeight/2

            )

        );

    }

}

function animateConfetti(){

    confettiCtx.clearRect(

        0,

        0,

        confettiCanvas.width,

        confettiCanvas.height

    );

    confetti.forEach((piece,index)=>{

        piece.update();

        piece.draw(confettiCtx);

        if(piece.opacity<=0){

            confetti.splice(index,1);

        }

    });

    requestAnimationFrame(animateConfetti);

}

animateConfetti();

/* ==========================================
   Trigger
========================================== */

const celebrateButton = document.getElementById("celebrateButton");

if(celebrateButton){

    celebrateButton.addEventListener("click",()=>{

        launchConfetti();

    });

}