let div3 = document.querySelector(".div3")
let basic = document.querySelector(".basic")
console.log(basic);
basic.addEventListener("click",function () {
    div3.style.display = "flex"
    basic.style.background = "chocolate"
    basic.style.width = "100%"
    basic.style.height = "100%"
    basic.style.display = "flex"
    basic.style.alignItems = "center"
    basic.style.justifyContent = "center"
    basic.style.borderRadius = "5px"
    div5.style.display= "none"
    div4.style.display = "none"
    prem.style.background = "none"
    ultra.style.background = "none"
})

//TODO: DIV4
let div4 = document.querySelector(".div4")
let prem = document.querySelector(".premium")
prem.addEventListener("click",function () {
    div4.style.display = "flex"
    prem.style.background = "chocolate"
    prem.style.width = "100%"
    prem.style.height = "100%"
    prem.style.display = "flex"
    prem.style.alignItems = "center"
    prem.style.justifyContent = "center"
    prem.style.borderRadius = "5px"
    div3.style.display = "none"
    div5.style.display= "none"
    basic.style.background = "none"
    ultra.style.background = "none"
})
//TODO: DIV5
let div5 = document.querySelector(".div5")
let ultra = document.querySelector(".ultra")
ultra.addEventListener("click",function () {
    div5.style.display = "flex"
    ultra.style.background = "chocolate"
    ultra.style.width = "100%"
    ultra.style.height = "100%"
    ultra.style.display = "flex"
    ultra.style.alignItems = "center"
    ultra.style.justifyContent = "center"
    ultra.style.borderRadius = "5px"
    div3.style.display = "none"
    div4.style.display = "none"
    basic.style.background = "none"    
    prem.style.background = "none"
})