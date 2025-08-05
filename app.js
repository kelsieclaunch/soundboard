  const buttons = document.querySelectorAll(".grid-item");

  const overlapToggle = document.getElementById("overlapToggle");

// Store one Audio object per button for non-overlap mode
  const audioMap = new Map();

  buttons.forEach(button => {
  const soundSrc = button.getAttribute("data-sound");

  // Pre-create audio for non-overlap mode
  const audioInstance = new Audio(soundSrc);
  audioMap.set(button, audioInstance);

  button.addEventListener("pointerdown", () => {
    button.classList.add("active");

    if (overlapToggle.checked) {
      // Overlap allowed: create new Audio every time
      const audio = new Audio(soundSrc);
      audio.currentTime = 0;
      audio.play().catch(err => console.log("Playback failed:", err));
    } else {
      // No overlap: reuse same Audio instance, restart if playing
      const audio = audioMap.get(button);
      audio.pause();
      audio.currentTime = 0;
      audio.play().catch(err => console.log("Playback failed:", err));
    }
  });

    button.addEventListener("pointerup", () => {
      button.classList.remove("active");
    });

    button.addEventListener("pointercancel", () => {
      button.classList.remove("active");
    });

    button.addEventListener("pointerleave", () => {
      button.classList.remove("active");
    });
  });