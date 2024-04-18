import { init } from "./main.js";


export function adatokListaba(lista){
    /* Összegyűjti az űrlapról az adatokat */
    let adat = {
        nev: "",
        kor: 0,
        nem: true
    }
    const submitELEM = $("#submit")
    /* beleteszi a listába, ha a hozzáad gombra kattintunk */
    submitELEM.on("click", function(event){
        /* submit gombról levesszük az alapértélmezett eseménykezelőt */
        event.preventDefault();
        /* megfogjuk az űrlapmezőket */
        const nevELEM = $("#nev")
        const korELEM = $("#kor")
        const nemELEM = $("input[name='nem']:checked")
        console.log(nemELEM.eq(0))
        adat = {
            nev: nevELEM.val(),
            kor: korELEM.val(),
            nem: nemELEM.val()==="false" ? false : true // ternális operátor
        }
        const validELEMEK = $(".valid-feedback")
        if (validELEMEK.eq(0).css("display")==="block" && validELEMEK.eq(0))
        lista.push(adat)
        init(lista);
    })
}