export const termekekLISTA = [
  {
    nev: "Karkötő",
    kep: "./kepek/placeholder.png",
    leiras: "Kézzel készült fa karkötő egyedi névvel.Rugalmas, nem szakad – több színben választható!",
    ar: "800 - 1000",
  },
  {
    nev: "Bokalánc",
    kep: "./kepek/placeholder.png",
    leiras: "Kézzel készült bokalánc, egyedi névvel. Könnyű, rugalmas, több színben – minden lépésed stílusosabb lesz.",
    ar: "1200 - 1400",
  },
  {
    nev: "Táska dísz",
    kep: "./kepek/placeholder.png",
    leiras: "Kézzel készült táskadísz, egyedi névvel. Több színben elérhető – stílusos kiegészítő minden napra.",
    ar: "600 - 800",
  },
  {
    nev: "Kantár dísz",
    kep: "./kepek/placeholder.png",
    leiras: "Kantárdísz, kézzel készült. Tartós, rugalmas, több színben elérhető – stílusos részlet minden kalandhoz.",
    ar: "500 - 700",
  },
];

export function megjelenites(txt, element) {
  element.innerHTML = txt;
}

export function kartyakOsszeAllit(lista) {
  let txt = `<div class="row g-3">`;
  lista.forEach((element) => {
    const termekId = element.id ?? "hiba";
    txt += `
      <div class="col-lg-4 col-sm-8 col-sm-12">
        <div class="card h-100 shadow">
          <div class="card-header text-center">
            <h5 class="card-title">${element.nev}</h5>
          </div>
          <img class="card-img-top" src="${element.kep}" alt="kép" />
          <div class="card-body">
            <p class="card-text">${element.leiras}</p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <span class="fw-bold">${element.ar} Ft</span>
            <a href="termekbelso.html?id=${termekId}" class="btn btn-dark btn-sm">Megtekintés</a>
          </div>
        </div>
      </div>`;
  });
  txt += `</div>`;
  return txt;
}