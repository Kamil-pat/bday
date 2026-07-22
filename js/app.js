/* ==========================================
   OUR STORY
   App Controller
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       HERO PARALLAX
    =============================== */

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const glow1 = document.querySelector(".glow1");
    const glow2 = document.querySelector(".glow2");

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        heroContent.style.transform =
            `translate(${x * 18}px, ${y * 18}px)`;

        glow1.style.transform =
            `translate(${x * 60}px, ${y * 60}px)`;

        glow2.style.transform =
            `translate(${-x * 80}px, ${-y * 80}px)`;

    });

    hero.addEventListener("mouseleave", () => {

        heroContent.style.transform = "";
        glow1.style.transform = "";
        glow2.style.transform = "";

    });

    /* ===============================
       BUTTON RIPPLE
    =============================== */

    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", e => {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = button.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 700);

        });

    });

    /* ===============================
       HEART EASTER EGG
    =============================== */

    let clicks = 0;

    const heart = document.getElementById("heart-svg");

    if (heart) {

        heart.addEventListener("click", () => {

            clicks++;

            if (clicks === 7) {

                clicks = 0;

                const note = document.createElement("div");

                note.className = "secret-message";

                note.innerHTML =
                    "<h2>❤️ Surprise ❤️</h2><p>I hope this little website reminds you how much you mean to me.</p>";

                document.body.appendChild(note);

                setTimeout(() => {

                    note.classList.add("show");

                }, 20);

                setTimeout(() => {

                    note.classList.remove("show");

                    setTimeout(() => note.remove(), 600);

                }, 5000);

            }

        });

    }

    /* ===============================
       IMAGE FADE-IN
    =============================== */

    document.querySelectorAll(".memory-image img")
        .forEach(img => {

            if (img.complete) {

                img.classList.add("loaded");

            } else {

                img.onload = () => {

                    img.classList.add("loaded");

                };

            }

        });

    /* ===============================
       BACKGROUND SHIFT
    =============================== */

    window.addEventListener("scroll", () => {

        const progress =
            window.scrollY /
            (document.body.scrollHeight - window.innerHeight);

        document.body.style.background =
            `linear-gradient(
                180deg,
                rgb(${255 - progress * 8},
                    ${248 - progress * 10},
                    ${251 - progress * 6}),
                rgb(${255},
                    ${242 - progress * 6},
                    ${246 - progress * 8})
            )`;

    });

    /* ===============================
       SCROLL PROGRESS
    =============================== */

    const progressBar = document.createElement("div");

    progressBar.id = "progressBar";

    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {

        const percent =
            window.scrollY /
            (document.body.scrollHeight - window.innerHeight);

        progressBar.style.width =
            (percent * 100) + "%";

    });

    /* ===============================
       CELEBRATION
    =============================== */

    const celebrate =
        document.getElementById("celebrateButton");

    celebrate.addEventListener("click", () => {

        celebrate.innerHTML = "❤️ Happy Birthday ❤️";

        celebrate.disabled = true;

        setTimeout(() => {

            celebrate.innerHTML = "Celebrate 🎉";

            celebrate.disabled = false;

        }, 4000);

    });

});