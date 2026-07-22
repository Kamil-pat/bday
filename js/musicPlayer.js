/* ==========================================
   OUR STORY
   Music Player
========================================== */

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playPause");
const progress = document.getElementById("progressBarMusic");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const album = document.querySelector(".album-art");

if (
    audio &&
    playBtn &&
    progress &&
    currentTime &&
    duration &&
    album
) {

    /* ----------------------------
       Format Time
    ---------------------------- */

    function formatTime(seconds) {

        const mins = Math.floor(seconds / 60);

        const secs = Math.floor(seconds % 60);

        return `${mins}:${secs.toString().padStart(2, "0")}`;

    }

    /* ----------------------------
       Metadata Loaded
    ---------------------------- */

    audio.addEventListener("loadedmetadata", () => {

        duration.textContent =
            formatTime(audio.duration);

    });

    /* ----------------------------
       Play / Pause
    ---------------------------- */

    playBtn.addEventListener("click", () => {

        if (audio.paused) {

            audio.play();

            playBtn.innerHTML = "❚❚";

            album.classList.add("playing");

        } else {

            audio.pause();

            playBtn.innerHTML = "▶";

            album.classList.remove("playing");

        }

    });

    /* ----------------------------
       Update Progress
    ---------------------------- */

    audio.addEventListener("timeupdate", () => {

        const percent =
            (audio.currentTime / audio.duration) * 100;

        progress.value = percent;

        currentTime.textContent =
            formatTime(audio.currentTime);

    });

    /* ----------------------------
       Drag Slider
    ---------------------------- */

    progress.addEventListener("input", () => {

        audio.currentTime =
            (progress.value / 100) * audio.duration;

    });

    /* ----------------------------
       Song Finished
    ---------------------------- */

    audio.addEventListener("ended", () => {

        playBtn.innerHTML = "▶";

        progress.value = 0;

        currentTime.textContent = "0:00";

        album.classList.remove("playing");

    });

}