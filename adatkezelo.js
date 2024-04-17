export function tablazatRendez(lista, irany){
    /* Adott mező (név) szerint rendezi a atábázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk.
        Berendezzük a listát */
        lista.sort(function(a,b){
            /* HF - szorgalmi: a.nev első betújének karakterkódja alapján */
            /*
            if (a.nev>b.nev){
                return 1;
            }else{
                return -1;
            }
            */

            return a.nev.toUpperCase()>b.nev.toUpperCase() ? 1*irany: -1*irany; /* pozitív, vagy negatív érték kell */
            
        });

        return lista;
}

/* HF - szorgalmi: lehessen rendezni kor szerint is! *** tetszőleges mező szerint */

export function atalakit(lista){
    /* HF - szorgalmi: Á - A, É - E 
        replaceAll() */
}

export function szuresNevSzerint(lista, szurtSzoveg){
    /* SzurtLista - a szűrőbe írt szó alapján kilistázza azokat az adatokat a listából,
        amelyekben szerepel a név mezőjében az adott szó. */
    const SZURTLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    console.log(SZURTLISTA);
    return SZURTLISTA;
}

export function sorTorles(lista, index){
    /*  Minden sor végén legyen egy kuka, erre a kukára kattintva töröljük az adott sort listából,
        és újra megjelenítjük a táblázatot a módosult listával. */
    lista.splice(index,1);
    return lista;
}