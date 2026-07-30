const heartContainer = document.querySelector(".hearts");
const loveButton = document.getElementById("loveButton");
const secretMessage = document.getElementById("secretMessage");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💗", "💖", "💕", "💘"][Math.floor(Math.random() * 5)];

  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  heart.style.fontSize = `${16 + Math.random() * 24}px`;

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8500);
}

setInterval(createHeart, 450);

loveButton.addEventListener("click", () => {
  secretMessage.classList.remove("hidden");
  loveButton.textContent = "Kocham Cię ❤️";

  for (let i = 0; i < 22; i++) {
    setTimeout(createHeart, i * 60);
  }
});
