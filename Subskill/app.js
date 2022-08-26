let map = L.map("map", { zoomControl: false, scrollWheelZoom: false }).setView(
  [-27.118292278878524, 11.476388680980726],
  4.5
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);
let markerIcon = L.icon({
  iconUrl: "assets/marker.svg",
  iconAnchor: [30, 60],
});

let marker = L.marker([-29.693373161209838, 31.004352521768425], {
  icon: markerIcon,
}).addTo(map);
marker = L.marker([-26.219237676991607, 28.30256668918793], {
  icon: markerIcon,
}).addTo(map);
marker = L.marker([-33.86788506029382, 18.7272571422494], {
  icon: markerIcon,
}).addTo(map);
const nav = document.querySelector("nav");
console.log(nav);
const burgerMenu = document.getElementById("burgerMenu");
burgerMenu.addEventListener("click", () => {
  nav.classList.add("open-nav");
  console.log(nav.classList);
});
