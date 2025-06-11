function startAnimation() {
  let cheer = document.getElementById("cheerSound");
  cheer.play();

  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.position = "absolute";
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.top = `${Math.random() * 100}%`;
    balloon.style.width = "50px";
    balloon.style.height = "70px";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.borderRadius = "50%";
    document.getElementById("balloons").appendChild(balloon);
  }

  setTimeout(() => {
    document.getElementById("balloons").innerHTML = "";
  }, 2000);
}

function getRandomColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff69b4"];
  return colors[Math.floor(Math.random() * colors.length)];
}
