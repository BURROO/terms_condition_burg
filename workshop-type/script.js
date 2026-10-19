
const container = document.getElementById("container")


container.style.fontSize = "200px"


const fontSize = document.getElementById("fontSize")

fontSize.addEventListener("input", (e) => {

    const value = e.currentTarget.value 

    container.style.fontSize = value + "px" 
})


let wght = 200
let wdth = 51

const fontWeight = document.getElementById("fontWeight")

fontWeight.addEventListener("input", (e) => {

    wght = e.currentTarget.value 

    const fontVariationSettings = '"wght" ' + wght + ', "wdth" ' + wdth
  
    container.style.fontVariationSettings = fontVariationSettings

})


const fontWidth = document.getElementById("fontWidth")

fontWidth.addEventListener("input", (e) => {

    wdth = e.currentTarget.value 

    const fontVariationSettings = '"wght" ' + wght + ', "wdth" ' + wdth

    container.style.fontVariationSettings = fontVariationSettings

})
