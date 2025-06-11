function startAnimation() {
  let balloons = document.getElementById("balloons");
  let count = 30;

  for (let i = 0; i < count; i++) {
    let balloon = document.createElement("div");
    balloon.style.position = "absolute";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.top = "100vh";
    balloon.style.width = "30px";
    balloon.style.height = "40px";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.borderRadius = "50%";
    balloon.style.opacity = 0.7;
    balloon.style.zIndex = 9999;
    balloon.style.transition = "top 2s ease-out";
    balloons.appendChild(balloon);

    setTimeout(() => {
      balloon.style.top = Math.random() * 50 + "vh";
    }, 100);
  }

  setTimeout(() => {
    balloons.innerHTML = "";
  }, 2000);

  let cheer = document.getElementById("cheerSound");
  cheer.play();
}

function getRandomColor() {
  const colors = ["#FF0000", "#1E90FF", "#32CD32", "#FFD700", "#FF69B4"];
  return colors[Math.floor(Math.random() * colors.length)];
}
