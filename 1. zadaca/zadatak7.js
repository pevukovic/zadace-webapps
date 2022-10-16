let polje = [3,4,5,6]

function obrnuto(p){
    let len = p.length
    let obrn = []
    for (i=len;i>=0;i--){
        obrn.push(p[i])
    }
    return obrn
}

console.log(obrnuto(polje))
