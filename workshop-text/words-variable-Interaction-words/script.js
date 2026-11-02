// ––––––––––––––––– Set up ––––––––––––––––– 

const text = "Animation (von lateinisch animare ‚zum Leben erwecken‘; anima ‚Geist‘, ‚Seele‘, ‚Leben(skraft)‘, ‚Atem‘) ist jede Technik, bei der durch das Erstellen und Anzeigen von Einzelbildern für den Betrachter ein bewegtes Bild geschaffen wird. Die Einzelbilder können gezeichnet, vom Computer berechnet oder fotografische Aufnahmen sein. Bei der Wiedergabe einer solchen Sequenz mit ca. 24 Bildern pro Sekunde entsteht beim Betrachter die Illusion einer annähernd flüssigen Bewegung. Dies hat aber auch zur Folge, dass ein 90 Minuten langer Film aus 129.600 Einzelbildern besteht und dementsprechend der Aufwand für die Erstellung hoch ist."
const container = document.getElementById("container")
const textSplitInWords = text.split(" ")


// Empty text
container.innerHTML = ""
    
// Set up paragraph
const paragraph = document.createElement("p")

// Now lets apply word by word
textSplitInWords.forEach((word, index) => {

    // Single Letters or multiple letters can be wrapped in a Span Element
    // > Span means that the elements is still flowing within text and does not look differnt per default!
    const span = document.createElement("span")

    // We can give it a random color
    const randomValue = Math.random() * 255 // (0–255)


    // –––––––– Conditions ––––––––

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


    // Colors
    span.style.background = "rgb(" + r + ',' + g + ',' + b + ")"

    span.innerHTML = word

    console.log("span", span)

    paragraph.appendChild(span)

    const spacer = document.createElement("span")
    spacer.innerHTML = " "
    paragraph.appendChild(spacer)

})


container.appendChild(paragraph)


