console.log ("hello world")

function melarancia(mele, arance){
    let melarancia = "succo con " + mele + " mele e " + arance+ " arance.";
    return melarancia;
};
console.log(melarancia(4,5));
console.log(melarancia(4,))




function anni(x){
    let anni = 2050 - x;
    return anni;
}
console.log(anni(1998));


var anniFreccia = (a) => 2050 - a;
console.log(anniFreccia(1998))



let pensione = (eta1, eta2, nome) =>  console.log(`${nome} va in pensione tra ${eta2 - eta1} anni`)




var fetteTorta = 10;

function check(){
    let fettePrese = document.getElementById("fette").value;
    if ((fetteTorta - fettePrese) >= 0) {
        document.getElementById("ingordo").innerHTML=`hai preso ${fettePrese} fette di torta`
        console.log(`hai preso ${fettePrese} fette di torta`)
    }
    else {
        document.getElementById("ingordo").innerHTML=(`ingordo, c'erano solo ${fetteTorta} fette di torta`)
        console.log(`ingordo, c'erano solo ${fetteTorta} fette di torta`)
    
    }
}

