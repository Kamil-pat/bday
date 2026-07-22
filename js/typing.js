/* ==========================================
   OUR STORY
   Premium Typewriter Effect
========================================== */

const typingElement = document.getElementById("typingText");

const lines = [

    "To the most amazing person in my life... ❤️",

    "Thank you for filling my days with happiness.",

    "I can't wait to make many more memories together."

];

let lineIndex = 0;
let charIndex = 0;

let started = false;

/* ==========================================
   Cursor
========================================== */

const cursor = document.createElement("span");

cursor.textContent = "|";

cursor.style.marginLeft = "4px";

cursor.style.animation = "blink .8s infinite";

typingElement.appendChild(cursor);

const cursorStyle = document.createElement("style");

cursorStyle.innerHTML = `

@keyframes blink{

0%,50%{

opacity:1;

}

51%,100%{

opacity:0;

}

}

`;

document.head.appendChild(cursorStyle);

/* ==========================================
   Type One Character
========================================== */

function typeCharacter(){

    if(lineIndex >= lines.length){

        cursor.remove();

        return;

    }

    if(charIndex < lines[lineIndex].length){

        typingElement.insertBefore(

            document.createTextNode(lines[lineIndex][charIndex]),

            cursor

        );

        charIndex++;

        setTimeout(typeCharacter,45);

    }else{

        setTimeout(nextLine,1400);

    }

}

/* ==========================================
   Next Line
========================================== */

function nextLine(){

    lineIndex++;

    charIndex = 0;

    if(lineIndex < lines.length){

        typingElement.innerHTML = "";

        typingElement.appendChild(cursor);

        setTimeout(typeCharacter,600);

    }else{

        cursor.remove();

    }

}

/* ==========================================
   Start Animation
========================================== */

const typingObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting && !started){

            started = true;

            typeCharacter();

        }

    });

},

{

threshold:.45

}

);

typingObserver.observe(document.getElementById("finale"));