import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import GraphModal from "graph-modal";

const modal = new GraphModal();

document.addEventListener('DOMContentLoaded', function() {

const videoElParent = document.querySelector(".video");
const videoEl = videoElParent
  ? videoElParent.querySelector(".video__item")
  : null;
const videoContainer = document.querySelector(".visibility-video");
let played = false;

if (videoEl) {
  videoElParent.addEventListener("click", function () {
    if (videoEl.paused) {
      videoEl.play();
      videoElParent.classList.add("video-play");
    } else {
      videoEl.pause();
      videoElParent.classList.remove("video-play");
    }
  });
}

function handleIntersection(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting && !played) {
      videoEl.play();
      played = true;
      videoElParent.classList.add("video-play");
      observer.disconnect();
    }
  });
}

if (videoContainer) {
  const options = {
    root: null,
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  observer.observe(videoContainer);
}

if (videoEl) {
  videoEl.addEventListener("ended", function () {
    played = false;
  });
}

const currentPath = window.location.pathname
const menuLinks = document.querySelectorAll('[data-active]');

menuLinks.forEach(function(link) {

  const keywords = ['index', 'sofa', 'ded', 'armchair',];

  if (keywords.some(keyword => link.getAttribute('data-active') === keyword && currentPath.includes(keyword))) {
    link.classList.add('active');
  }

});

});
