let polje=[1,2,3,4,5,6,7,8,9,10]
let velicina = polje.length

function djeljivost(polje){
    for(let i = 0; i < velicina; i++){
        if(polje[i]%3 == 0){
            console.log(polje[i])
        }
    }
}
djeljivost(polje)
