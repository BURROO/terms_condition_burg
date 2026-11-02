const text = "Als Einzelbild (englisch frame) bezeichnet man ein einzelnes Bild aus einer Filmsequenz. Es stellt die elementare Einheit des Mediums Film dar, analog dem Buchstaben in der Schrift. Das Einzelbild in der statischen Photographie wird als Stehbild bezeichnet."

const container = document.getElementById("container")

const listOfWords = text.split(" ")


document.addEventListener("mousemove", e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const x = mouseX / window.innerWidth
    const y = mouseY / window.innerHeight


    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    const wghtRange = 1000 - 100
    const wght = x * wghtRange + 100

    const wdthRange = 151 - 25
    const wdth = y * wdthRange + 25

    container.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`



    // Loop through all the word in our list
    listOfWords.forEach(word => {

        const top = 

    })



    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

    console.log(x, y)
})