/* jelenítsük meg az adatainkat egy táblázatban az adatok div-ben
az urlap div-ben legyen egy űrlap, amivel ilyen adatokat tudunk a táblázatba beletenni 

1. ha a táblázat fejlécére kattintunk, akkor azon mező szerint
tudjuk rendezni  a táblázatot.
2. tudjuk törölni a táblázat adott sorát.
3. legyen egy szűrőmező, ahova beírva szavakat, tuduznk szűrni, név szerint.

Milyen függvények kellenek?

1. tablazatOsszeallit(lista)->txt - összeállítjqa a html kódot szöveges formátumban, minden sor végén legyen egy kuka!
2. megjelenites(txt)->nincs - megjeleníti egy html szöveget egy html elembe.
3. tablazatbaTesz(lista) - összeszedi az űrlapadatokat, és hozzáfűzi a listához, majd
megjeleníti úrja a táblázatot. - akkor hívódik meg, ha a Submit gombra kattintunk.
4. tablazatRendez(lista) - adott mező szerint rendezi a atábázatot. - akkor hívódik meg, ha a táblázat adott fejlécmezőjére kattintunk.
berendezzük a listát, és megjelenítjük újra a táblázatot.
5. sorTorles(lista, index) - minden sor végén legyen egy kuka, erre a kukára kattintva töröljük az adott sort listából,
 és újra megjelenítjük a táblázatot a módosult listával.
6. szuresNevSzerint(lista, szurtSzoveg)-> szurtLista - a aszűrőbe írt szó alapján kilistázza azokat az adatokat a listából,
amelyekben szerepel a név mezője az adott szó.
Ezután megjelanítjük a szürt listát az oldalon.
Akkor fog lefutni, amikor megváltozik a  szürőmező tartalma.

*/