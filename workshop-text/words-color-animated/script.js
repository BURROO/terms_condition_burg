// ––––––––––––––––– Set up ––––––––––––––––– 

const text = "Animation (von lateinisch animare ‚zum Leben erwecken‘; anima ‚Geist‘, ‚Seele‘, ‚Leben(skraft)‘, ‚Atem‘) ist jede Technik, bei der durch das Erstellen und Anzeigen von Einzelbildern für den Betrachter ein bewegtes Bild geschaffen wird. Die Einzelbilder können gezeichnet, vom Computer berechnet oder fotografische Aufnahmen sein. Bei der Wiedergabe einer solchen Sequenz mit ca. 24 Bildern pro Sekunde entsteht beim Betrachter die Illusion einer annähernd flüssigen Bewegung. Dies hat aber auch zur Folge, dass ein 90 Minuten langer Film aus 129.600 Einzelbildern besteht und dementsprechend der Aufwand für die Erstellung hoch ist."
const container = document.getElementById("container")
const textSplitInWords = text.split(" ")


// ––––––––––––––––– Content Manipulation ––––––––––––––––– 

// Now lets apply word by word
// All the code within this function, runs for each word!!
textSplitInWords.forEach((word) => {

    // word above is a variable that holds the words (e.g. "This" or "is" or "a" or "test")

    // Single Letters or multiple letters can be wrapped in a span Element
    // This allows us to have more control over each words styling and animation
    const span = document.createElement("span")

    // We can give it a random color
    const randomValue = Math.random() * 255 // (0–255)
    
    // We can play with these values
    const red = randomValue
    const green = 255
    const blue = 255

    // Apply the color to background for instance
    span.style.background = "rgb(" + red + ',' + green + ',' + blue + ")"

    // Don't forget to append the span with the word inside to the container 
    container.appendChild(span)
})


// ––––––––––––––––– Content Animation ––––––––––––––––– 


// Now we can also animate this
const waitTime = 200

setInterval(() => {

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

        // Manipulate yellow for numbers
        const isNumber = isNaN(word)

        // is Lonver than 5 chars
        const isLongerThanFive = word.length > 5

        // –––––––– Terms ––––––––

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

    })


    container.appendChild(paragraph)
}, waitTime);


