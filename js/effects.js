/* ==========================================
   OUR STORY
   Premium Effects
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       DAY → SUNSET → NIGHT
    =============================== */

    const body = document.body;

    function updateBackground(){

        const max =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const p = window.scrollY / max;

        let top;
        let bottom;

        if(p < .35){

            top = "#fff8fb";
            bottom = "#ffe9f2";

        }else if(p < .70){

            top = "#ffe5d2";
            bottom = "#ffd7ea";

        }else{

            top = "#1c2340";
            bottom = "#3f2d63";

        }

        body.style.transition = "background 1.5s ease";

        body.style.background =
            `linear-gradient(${top},${bottom})`;

    }

    updateBackground();

    window.addEventListener("scroll", updateBackground);

    /* ===============================
       FIRELIES
    =============================== */

    const finale =
        document.getElementById("finale");

    if(finale){

        for(let i=0;i<20;i++){

            const firefly =
                document.createElement("div");

            firefly.className = "firefly";

            firefly.style.left =
                Math.random()*100+"%";

            firefly.style.top =
                Math.random()*100+"%";

            firefly.style.animationDelay =
                Math.random()*8+"s";

            finale.appendChild(firefly);

        }

    }

    /* ===============================
       FLOATING PETALS
    =============================== */

    function createPetal(){

        const petal =
            document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random()*100+"vw";

        petal.style.fontSize =
            (18+Math.random()*18)+"px";

        petal.style.animationDuration =
            (8+Math.random()*8)+"s";

        document.body.appendChild(petal);

        petal.addEventListener(
            "animationend",
            ()=>petal.remove()
        );

    }

    setInterval(createPetal,1200);

});