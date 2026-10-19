// Task 1

const container = document.getElementById("container")

// console.log(container);

container.innerHTML = "Hallo"


// Controls abrufen
const fontWeight = document.getElementById("fontWeight")

// Many ways of writing this
fontWeight.addEventListener("input", (e) => {

    // Read the user value
    const fontWeight = e.currentTarget.value

    console.log("fontWeight", fontWeight)

    const variableFontSettings = '"wght" ' + fontWeight
    // const variableFontSettings = ``

    container.style.fontVariationSettings = variableFontSettings



})