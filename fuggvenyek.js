export function tablazatOsszeallit(lista){
    /* Összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka! */
    let txt = "";
    txt += "<table class = 'table table-striped'>";
    txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
    /* HF-szorgalmi: a fejléc kulcsait is ciklussal írd ki! */
    lista.forEach((element,i) => {
        txt += `<tr>`;
        for (const key in element) {  
            // objektumokon iterál végig
            txt += `<td>${element[key]}</td>`;
        }
        txt += `<td id="${i}" class="kuka">🗑️</td>
                </tr>`;
    });
    txt += "</table>";
    return txt;
}

export function megjelenites(txt) {
    /* Megjeleníti egy html szöveget egy html elembe. */
    const adatokELEM = $(".adatok");
    adatokELEM.html(txt);
}