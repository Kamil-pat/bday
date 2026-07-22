/* ==========================================
   OUR STORY
   Premium Timeline Animations
========================================== */

const revealElements = document.querySelectorAll(
    ".memory, .quote"
);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},

{
    threshold:.20
}

);

revealElements.forEach(el=>observer.observe(el));

/* ==========================================
   Timeline Progress Bar
========================================== */

const timeline=document.querySelector(".timeline");

const style=document.createElement("style");

style.innerHTML=`

.timeline::before{

background:linear-gradient(

to bottom,

#ffd8e8 0%,

#ff87b5 var(--scrollProgress,0%),

#ffeaf3 var(--scrollProgress,0%)

);

transition:.15s;

}

`;

document.head.appendChild(style);

function updateTimeline(){

    if(!timeline) return;

    const rect=timeline.getBoundingClientRect();

    const view=window.innerHeight;

    const total=rect.height;

    const progress=((view-rect.top)/(total+view))*100;

    const value=Math.min(100,Math.max(0,progress));

    timeline.style.setProperty("--scrollProgress",value+"%");

}

window.addEventListener("scroll",updateTimeline);

updateTimeline();

/* ==========================================
   Mouse Tilt Cards
========================================== */

document.querySelectorAll(".memory-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rx=(y-rect.height/2)/15;

        const ry=(rect.width/2-x)/15;

        card.style.transform=

`perspective(900px)
 rotateX(${rx}deg)
 rotateY(${ry}deg)
 translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});

/* ==========================================
   Image Parallax
========================================== */

window.addEventListener("scroll",()=>{

    document.querySelectorAll(".memory-image img")

    .forEach(img=>{

        const rect=img.getBoundingClientRect();

        const offset=rect.top-window.innerHeight/2;

        img.style.transform=

`translateY(${offset*.05}px) scale(1.02)`;

    });

});

/* ==========================================
   Smooth Scroll
========================================== */

const beginButton=document.getElementById("beginButton");

const chapter=document.querySelector(".chapter-title");

if(beginButton && chapter){

beginButton.onclick=()=>{

chapter.scrollIntoView({

behavior:"smooth"

});

};

}

/* ==========================================
   Floating Quotes
========================================== */

document.querySelectorAll(".quote").forEach(q=>{

    q.addEventListener("mouseenter",()=>{

        q.style.transform="translateY(-6px)";

    });

    q.addEventListener("mouseleave",()=>{

        q.style.transform="translateY(0px)";

    });

});

/* ==========================================
   Finale Fade
========================================== */

const finale=document.getElementById("finale");

window.addEventListener("scroll",()=>{

if(!finale) return;

const rect=finale.getBoundingClientRect();

const visible=1-(rect.top/window.innerHeight);

finale.style.opacity=Math.min(1,Math.max(.25,visible));

});