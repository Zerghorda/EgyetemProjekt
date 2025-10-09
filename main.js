import { megjelenites, kartyakOsszeAllit } from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";

$(function () {
  // kártyák összerakása
  const txt = kartyakOsszeAllit(termekekLISTA);

  // megjelenítés az articlebe
  megjelenites(txt, $("article"));
});

function toggleKeresosav() {
  const sav = document.getElementById("mobilKeresosav");
  if (sav.style.maxHeight) {
    sav.style.maxHeight = null;
    sav.style.opacity = 0;
  } else {
    sav.style.maxHeight = sav.scrollHeight + "px";
    sav.style.opacity = 1;
  }
}

function keresesInditasa() {
  const mezo = document.getElementById("keresoMezo");
  const keresettSzoveg = mezo.value.trim();
  if (keresettSzoveg === "") {
    alert("Kérlek, írj be valamit a kereséshez!");
  } else {
    alert("Keresett kifejezés: " + keresettSzoveg);
  }
}
function toggleKeresosav() {
  const sav = document.getElementById("mobilKeresosav");
  if (sav.style.display === "none" || sav.style.display === "") {
    sav.style.display = "block";
  } else {
    sav.style.display = "none";
  }
}