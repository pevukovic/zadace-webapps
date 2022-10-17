let x = 534

function visekratnik(a){
    if(a >= 0 && a <= 1000){
        console.log("Broj se nalazi izmedu 0 i 1000.")
    } else{
        console.log("Broj se ne nalazi izmedu 0 i 1000")
    }
    
    for(let i = 0; i < a; i++){
        if(i % 7 == 0){
            console.log(i)
        }
    }
}

visekratnik(x)