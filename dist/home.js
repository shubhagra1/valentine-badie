let ansNo = document.getElementById("no")
let ansYes = document.getElementById("yes")
let imgContainer = document.getElementById("imageContainer")
let valentine = document.getElementById("valentine")
let video = document.getElementById("video")



ansNo.addEventListener('mouseenter', function(e) {
  // Generate random coordinates within the viewport
    const newTop = Math.random() * window.innerHeight + "px";
    const newLeft = Math.random() * window.innerWidth + "px";
    
    // Apply new position
    ansNo.style.top = newTop;
    ansNo.style.left = newLeft;
});

ansNo.addEventListener('touchstart', function(e) {
  // Generate random coordinates within the viewport
    const newTop = Math.random() * (window.innerHeight - ansNo.offsetHeight) + "px";
    const newLeft = Math.random() * (window.innerWidth - ansNo.offsetWidth) + "px";

    console.log(newTop)
        console.log(newLeft)

    // Apply new position
    ansNo.style.top = newTop;
    ansNo.style.left = newLeft;
});

ansYes.addEventListener("click",function(){
    imgContainer.style.display = "none";
    ansNo.style.display = "none";
    ansYes.style.display = "none";
    valentine.innerHTML = "You just made my heart skip a beat Cutie ❤️"
    video.style.display = "block"
    showerHearts();
    showerHearts();
    showerHearts();
    showerHearts();
    // valentineDiv.style.display = "none";
})


const showerHearts = ()=>{
    const duration = 20 * 1000,
  animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  const timeLeft = animationEnd - Date.now(),
    ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * skew - 0.2,
    },
    colors: ["#b012a0"],
    shapes: ["heart"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(1, 5),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
})();
}