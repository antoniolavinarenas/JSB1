function comercial(tIngr){
    let name ="";
    let maximo = 0;
    let tablaFacturacion= new Array();
    for (let i=0; i< tIngr.length; i++) {
        ingresoTotal=0;
        for (let j=0; j < tIngr[i].fact.length; j++) {
            ingresoTotal = ingresoTotal + tIngr[i].fact[j];
        }
        tablaFacturacion.push({nombre: tIngr[i].nom, total: ingresoTotal});
    }
    for (let k=0; k < tablaFacturacion.length; k++ ) {
        if (maximo <= tablaFacturacion[k].total) {
            maximo = tablaFacturacion[k].total;
            name = tablaFacturacion[k].nombre;
        }
    }
    return name;
}
let comer = [ {nom:"Daniel",fact:[6899,2713,6827,5805,3058,3679,4094,7581,5867,6901,5116,2392]}, {nom:"Raquel",fact:[6747,5485,7431,2667,2431,3900,7222,7601,5109,6556,6211,7087]}, {nom:"Eva",fact:[2831,2645,2242,5586,3124,7396,5556,3268,3186,6632,5319,2263]}, {nom:"Víctor",fact:[4758,6212,7835,6240,6513,6639,4246,3244,5914,3338,2415,5240]}, ];
console.log(comercial(comer));