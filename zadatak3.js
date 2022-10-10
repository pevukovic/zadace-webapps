function sateuminute(x){
    sati = Math.floor(x/60)
    minute = x % 60
    return ("Ovo je " + sati + " sata i " + minute + " minuta.")
}

console.log (sateuminute(120))