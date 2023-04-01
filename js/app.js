let Pokemon1 = document.getElementById(`pokemon1`)
let Pokemon2 = document.getElementById(`pokemon2`)
let Pokemon3 = document.getElementById(`pokemon3`)

if(Pokemon1.addEventListener(`click`)){
    Cookie.set(`selection`, Pokemon1)
}  else{
    document.body.insertAdjacentHTML("afterbegin",`h1 please pick again`)
}

if(Pokemon2.addEventListener(`click`)){
    Cookie.set(`selection`,Pokemon2)
}else(
    document.body.insertAdjacentHTML("afterbegin", `h1:please pick again`)
)

if(Pokemon3.addEventListener(`click`)){
    Cookie.set(`selection`,Pokemon3)
}else{
    document.body.insertAdjacentHTML("afterbegin", `h1: Please pick again`)
}
