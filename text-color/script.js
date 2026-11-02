// Task 1

// ––––––––––––––––– Set up ––––––––––––––––– 

const text = "Animation (von lateinisch animare ‚zum Leben erwecken‘; anima ‚Geist‘, ‚Seele‘, ‚Leben(skraft)‘, ‚Atem‘) ist jede Technik, bei der durch das Erstellen und Anzeigen von Einzelbildern für den Betrachter ein bewegtes Bild geschaffen wird. Die Einzelbilder können gezeichnet, vom Computer berechnet oder fotografische Aufnahmen sein. Bei der Wiedergabe einer solchen Sequenz mit ca. 24 Bildern pro Sekunde entsteht beim Betrachter die Illusion einer annähernd flüssigen Bewegung. Dies hat aber auch zur Folge, dass ein 90 Minuten langer Film aus 129.600 Einzelbildern besteht und dementsprechend der Aufwand für die Erstellung hoch ist."

const container = document.getElementById("container")

// ––––––––––––––––– Content Manipulation ––––––––––––––––– 


// Now we split each element up into its own container
const textSplitInWords = text.split(" ")
// .map(word => {

//     return word.split("").map(letter => {
//         if(letter.match(/a|e|i|u|o/ig)) return "a"
//         else return letter
//     }).join("")
// })

// Check how many words
// console.log(textSplitInWords.length)

// Now lets apply word by word
textSplitInWords.forEach((word, index) => {


    // Single Letters or multiple letters can be wrapped in a Span Element
    // > Span means that the elements is still flowing within text and does not look differnt per default!
    const span = document.createElement("span")

    // We can give it a random color
    const randomValue = Math.random() * 255 // (0–255)
    const r = randomValue
    const g = 255
    const b = 255

    const rgb = [randomValue, g, b] // we onle change the red value!!


    span.style.background = "rgb(" + r + ',' + g + ',' + b + ")"

    span.innerHTML = word + " "


    console.log("span", span)

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
        // const g = 255
        // const b = 255
        const r2 = 255-randomValue
        const g2 = 255-randomValue
        const b2 = 255-randomValue

        // –––––––– Applied ––––––––


        // Colors
        span.style.background = "rgb(" + r + ',' + g + ',' + b + ")"
        span.style.color = "rgb(" + r2 + ',' + g2 + ',' + b2 + ")"


        // Fonts styling
        // span.style.textDecoration = "underline"
        // span.style.transform = "rotate(" + Math.random() * 50 + "deg)"

        span.innerHTML = word

        console.log("span", span)

        paragraph.appendChild(span)

        const spacer = document.createElement("span")
        spacer.innerHTML = " "
        paragraph.appendChild(spacer)

    })


    container.appendChild(paragraph)
}, waitTime);




// Interaction
// window.addEventListener("mousemove", (e) => {


//     // Reading current Mouse Position
//     const mouseX = e.clientX
//     const mouseY = e.clientY

//     // We can now look how close each element is to the mouse
//     const spans = document.querySelectorAll("span")

//     for(let i = 0; i < spans.length; i++){

//         const spanX = spans[i].getBoundingClientRect().left
//         const spanY = spans[i].getBoundingClientRect().top

//         const r = (mouseX-spanX) 
//         const g = (mouseY-spanX) 
//         const b = 255
        


//         // –––––––– Applied ––––––––
//         spans[i].style.display = "inline-block"
//         // spans[i].style.transform = "rotate(" + r*0.001 + "deg)"
//         spans[i].style.transform = "skew(" + r/255 * 10 + "deg, 0deg)"

//         // Colors
//         spans[i].style.background = "rgb(" + r + ',' + g + ',' + b + ")"


//     }

// })

