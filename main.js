
const phrases = [
  "Il controllo è un’illusione.",
  "I tuoi vestiti parlano per te.",
  "SYSOFF non si compra. Si attiva.",
  "01101011 – messaggio troncato – // riavvia coscienza"
];

setInterval(() => {
  document.getElementById("footerText").textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);

function accessGranted() {
  document.getElementById("main").style.display = "none";
  document.getElementById("manifestoBlock").style.display = "flex";
}

function accessDenied() {
  alert("Hai scelto l'oblio. Ma la verità ti seguirà.");
  location.reload();
}
