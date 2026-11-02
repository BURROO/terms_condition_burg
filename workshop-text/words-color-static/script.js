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
    const darkestValue = 100 // Black = 0
    const range = 255 - darkestValue

    const randomValue = darkestValue + Math.random() * range // (0–255)

    // SIMPLER VERSION – for all values between white and black!
    // const randomValue = 255 + Math.random() 

    const r = randomValue
    const g = randomValue
    const b = randomValue

    // Colors
    span.style.background = "rgb(" + r + ',' + g + ',' + b + ")"

    span.innerHTML = word

    console.log("span", span)

    paragraph.appendChild(span)

    const spacer = document.createElement("span")
    spacer.innerHTML = " "
    paragraph.appendChild(spacer)



    // EXTRAS: Condifional Styling

    // Lets make it yellow if it is a number
    const isNumber = isNaN(word) == false // isNaN = is Not a Number > so we check if is not a number and if that is false; we know it is a number (double reverse…)

    if(isNumber) span.style.background = "yellow"

    // is Lonver than 5 chars
    const isVeryLongWord = word.length > 10

    if(isVeryLongWord) span.style.background = "red"


})


container.appendChild(paragraph)


