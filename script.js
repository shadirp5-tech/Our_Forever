if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});


/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate =
  new Date("October 18, 2026 10:00:00").getTime();

const countdownTimer = setInterval(function () {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {

    clearInterval(countdownTimer);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById("days").innerHTML =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerHTML =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerHTML =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerHTML =
    String(seconds).padStart(2, "0");

}, 1000);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
  ".venue-card, .event-card, .countdown-section"
);

const observer = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(function (element) {
  observer.observe(element);
});


/* =====================================================
   OPEN INVITATION
===================================================== */

const openInvitation =
  document.getElementById("openInvitation");

const weddingMusic =
  document.getElementById("weddingMusic");

openInvitation.addEventListener("click", function () {

  if (weddingMusic) {
    weddingMusic.volume = 1.0;

    const playPromise = weddingMusic.play();

    if (playPromise !== undefined) {
      playPromise.catch(function (error) {
        console.log("Music could not start:", error);
      });
    }
  }

  document.getElementById("countdown").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});