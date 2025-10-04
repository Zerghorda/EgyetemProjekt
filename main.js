import { megjelenites, kartyakOsszeAllit } from "./fuggvenyek.js";
import { termekekLISTA } from "./termekek.js";

$(function () {
  // kártyák összerakása
  const txt = kartyakOsszeAllit(termekekLISTA);

  // megjelenítés az articlebe
  megjelenites(txt, $("article"));
});
