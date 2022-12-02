const containerEl = document.querySelector(".container");
const watchBtnEl = containerEl.querySelector("#watch_Btn");
const videoContainerEl = document.querySelector(".video_container");
const videoEl = videoContainerEl.querySelector("video");
const croossIconEl = videoContainerEl.querySelector(".crooss_icon");

watchBtnEl.addEventListener ("click", () => {
    containerEl.classList.add("hidden");
    videoContainerEl.classList.remove("hidden");
});

croossIconEl.addEventListener ("click", () => {
    containerEl.classList.remove("hidden");
    videoContainerEl.classList.add("hidden");
    videoEl.pause();
    videoEl.currentTime = 0;
});