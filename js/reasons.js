/* ==========================================
   THINGS I LIKE ABOUT YOU
========================================== */

const reasons = [

{
title:"Your Smile",
text:"Your smile always brightens up my day."
},

{
title:"Your Laugh",
text:"Your laugh instantly makes me smile too."
},

{
title:"Your Kindness",
text:"You care about people in a way that's incredible."
},

{
title:"Your Energy",
text:"You make every moment feel so exciting."
},

{
title:"Our Adventures",
text:"Every drive, every journey, and every little last minute scramble (lol) is better because you're there."
},

{
title:"Our Teamwork",
text:"From baking a cake to saving the world from a giant meatball because a walnut told us to do it, I wouldn't rather have anyone else by my side."
},

{
title:"Your Fashion",
text:"I will never not be speechless and in awe every time I see you."
},

{
title:"Your Eyes",
text:"The way your eyes light up when you're happy is so beautiful."
},

{
title:"The Way You Care",
text:"You always seem to know when I need a little positive push or encouragement."
},

{
title:"Our Calls",
text:"My favorite part of the day is when we finally get to talk to each other. Our 5 hours calls always end up feeling like 5 minutes."
},

{
title:"You Inspire Me",
text:"You make me want to become a better person every single day."
},

{
title:"Your Hugs",
text:"Your hugs are enough to take a whole day's stress out. There's a comforting feel to them that I can't explain."
},

{
title:"Your Dancing",
text:"Ra Ra Rasputin!"
},

{
title:"Hope",
text:"You are my hope."
},

{
title:"Your Determination",
text:"The efforts you put into what you do and what you want to become is so inspiring."
},

{
title:"Overcooked",
text:"You're the best sous chef in the world lol."
},

{
title:"Simply You",
text:"Out of everyone in the world, I'm incredibly lucky that I get to be by your side."
},

{
title:"❤️",
text:"These are only a few of the countless things I like so much about you. Happy Birthday ❤️"
}

];

const card =
document.getElementById("reasonCard");

const number =
document.getElementById("reasonNumber");

const title =
document.getElementById("reasonTitle");

const text =
document.getElementById("reasonText");

const counter =
document.getElementById("reasonCounter");

const next =
document.getElementById("nextReason");

const previous =
document.getElementById("previousReason");

let current = 0;
let order = [];
let opened = false;

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}

function resetOrder() {
   order = reasons.map((_, index) => index);
   shuffle(order);
   current = 0;
}

/* ============================= */

function updateCard(){

const reason = reasons[order[current]];

   number.textContent = current + 1;

   title.textContent = reason.title;

   text.textContent = reason.text;

   counter.textContent = `${current + 1} / ${reasons.length}`;

}

/* ============================= */

card.addEventListener("click",()=>{

if(!opened){

opened=true;

card.classList.add("flipped");

updateCard();

}

});

/* ============================= */

next.addEventListener("click",()=>{

   card.classList.remove("flipped");
   opened = false;

   current++;
   if(current >= reasons.length){
      resetOrder();
   }
   updateCard();

});

/* ============================= */

previous.addEventListener("click",()=>{

   card.classList.remove("flipped");
   opened = false;

   current--;
   if(current < 0){
      resetOrder();
      current = reasons.length - 1;
   }
   updateCard();

});

resetOrder();
updateCard();