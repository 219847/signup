(function() {
  const footer = document.createElement("footer");
  footer.style.marginTop = "40px";
  footer.style.textAlign = "center";
  footer.style.color = "#777";
  footer.style.fontSize = "12px";

  footer.innerHTML = `
    <p>This is a page of the Doge Casino.<br></p>
    <p><a href="https://219847.github.io/doge-casino" style="color:#777;">Home</a></p>
    <p><a href="https://219847.github.io/about-us" style="color:#777;">About us</a></p>
  `;

  document.body.appendChild(footer);
})();
(function() {
  const clock = document.createElement("div");
  clock.style.textAlign = "center";
  clock.style.color = "#777";
  clock.style.fontSize = "12px";
  clock.style.marginTop = "6px";

  function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }

  updateClock();
  setInterval(updateClock, 1000);

  document.body.appendChild(clock);
})();
