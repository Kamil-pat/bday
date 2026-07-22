/* ==========================================
   OUR STORY
   Premium Particle System
========================================== */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/* ==========================================
   Particle
========================================== */

class Particle{

    constructor(){

        this.reset(true);

    }

    reset(initial=false){

        this.x = Math.random()*canvas.width;

        this.y = initial
            ? Math.random()*canvas.height
            : canvas.height+40;

        this.size = 12 + Math.random()*12;

        this.speed = 0.3 + Math.random()*0.9;

        this.opacity = 0.25 + Math.random()*0.55;

        this.drift = (Math.random()-0.5)*0.8;

        this.rotation = Math.random()*360;

        this.rotationSpeed = (Math.random()-0.5)*0.4;

        this.sparkle = Math.random() > .65;

    }

    update(){

        this.y -= this.speed;

        this.x += this.drift;

        this.rotation += this.rotationSpeed;

        if(this.y < -40){

            this.reset();

        }

    }

    draw(){

        ctx.save();

        ctx.translate(this.x,this.y);

        ctx.rotate(this.rotation*Math.PI/180);

        ctx.globalAlpha = this.opacity;

        if(this.sparkle){

            ctx.fillStyle="#ffffff";

            ctx.beginPath();

            ctx.arc(0,0,2.5,0,Math.PI*2);

            ctx.fill();

            ctx.beginPath();

            ctx.moveTo(-6,0);
            ctx.lineTo(6,0);

            ctx.moveTo(0,-6);
            ctx.lineTo(0,6);

            ctx.strokeStyle="rgba(255,255,255,.7)";
            ctx.lineWidth=1;

            ctx.stroke();

        }else{

            ctx.font=this.size+"px serif";

            ctx.fillStyle="#ff7fb2";

            ctx.fillText("❤",0,0);

        }

        ctx.restore();

    }

}

/* ==========================================
   Create Particles
========================================== */

function createParticles(){

    particles=[];

    let amount=Math.max(40,Math.floor(window.innerWidth/30));

    for(let i=0;i<amount;i++){

        particles.push(new Particle());

    }

}

createParticles();

window.addEventListener("resize",createParticles);

/* ==========================================
   Animation
========================================== */

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let p of particles){

        p.update();

        p.draw();

    }

    requestAnimationFrame(animate);

}

animate();