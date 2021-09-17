const bg = document.getElementsByClassName("project-box")

bg.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
  });