
// Task 1

// ––––––––––––––––– Set up ––––––––––––––––– 

const text = "Animation (von lateinisch animare ‚zum Leben erwecken‘; anima ‚Geist‘, ‚Seele‘, ‚Leben(skraft)‘, ‚Atem‘) ist jede Technik, bei der durch das Erstellen und Anzeigen von Einzelbildern für den Betrachter ein bewegtes Bild geschaffen wird. Die Einzelbilder können gezeichnet, vom Computer berechnet oder fotografische Aufnahmen sein. Bei der Wiedergabe einer solchen Sequenz mit ca. 24 Bildern pro Sekunde entsteht beim Betrachter die Illusion einer annähernd flüssigen Bewegung. Dies hat aber auch zur Folge, dass ein 90 Minuten langer Film aus 129.600 Einzelbildern besteht und dementsprechend der Aufwand für die Erstellung hoch ist."

const container = document.getElementById("container")


const wghtMin = 100
const wghtMax = 1000
const wghtRange = wghtMax - wghtMin

const wdthMin = 25
const wdthMax = 151
const wdthRange = wdthMax - wdthMin

// ––––––––––––––––– Content Manipulation Setup ––––––––––––––––– 


// Now we split each element up into its own container
const textSplitInWords = text.split(" ")

const elementsPerWord = []

const anticipatedWidth = 100
const anticipatedHeight = 40

// Now lets apply word by word
textSplitInWords.forEach((word, index) => {

    // We can give it a random color

    // Single Letters or multiple letters can be wrapped in a Span Element
    // > Span means that the elements is still flowing within text and does not look differnt per default!
    // The wrapper takes the space in the text flow and carries the background
    const wrapper = document.createElement("span")
    wrapper.style.display = "inline-block"
    wrapper.style.padding = "0"
    // wrapper.style.marginRight = "10px"

    // The inner span holds the word and gets stretched
    const span = document.createElement("span")
    span.style.display = "inline-block"
    span.style.whiteSpace = "nowrap"

    const wghtValue = Math.random() * wghtRange + wghtMin
    const wdthValue = Math.random() * wdthRange + wdthMin

    span.style.fontFeatureSettings = `"wght" ${wghtValue}, "wdth" ${wdthValue}`
    span.textContent = word

    wrapper.appendChild(span)
    container.appendChild(wrapper)

    // This is where we use the function the first time!!
    handleWidth(span, anticipatedWidth, anticipatedHeight)

    elementsPerWord.push(span)

})



console.log("elementsPerWord", elementsPerWord)


// Animaton!!


// Width range for the words while interacting
const minWidth = 40
const maxWidth = 250


const minHeight = 40
const maxHeight = 250

// Register an event
document.addEventListener("mousemove", (e) => {

    // Access the values that we want to work with: Mouse position
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Loop through the elements we want to interact with
    elementsPerWord.forEach(element => {


        // const wrapper = element.parentNode

        // Measure the wrapper (it has the real layout size) and use its center
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distX = Math.abs(mouseX - centerX)
        const distY = Math.abs(mouseY - centerY)

        // Normalised Distance (0 = at the mouse, 1 = far away)
        const normalDistX = Math.min(distX / window.innerWidth, 1)
        const normalDistY = Math.min(distY / window.innerHeight, 1)

        const targetWidth = maxWidth - (maxWidth - minWidth) * normalDistX
        const targetHeight = maxHeight - (maxHeight - minHeight) * normalDistY


        handleWidth(element, targetWidth, targetHeight)
   
    })


})



// ––––––––––––––––– Content Animation ––––––––––––––––– 


// Now we can also animate this
// const waitTime = 200

// setInterval(() => {

//     // Empty text
//     container.innerHTML = ""
        
//     // Set up paragraph
//     const paragraph = document.createElement("p")

//     // Now lets apply word by word
//     textSplitInWords.forEach((word, index) => {


//         // Single Letters or multiple letters can be wrapped in a Span Element
//         // > Span means that the elements is still flowing within text and does not look differnt per default!
//         const span = document.createElement("span")

//         // We can give it a random color
//         const randomValue = Math.random() * 255 // (0–255)


//         // –––––––– Conditions ––––––––

//         // Manipulate yellow for numbers
//         const isNumber = isNaN(word)

//         // is Lonver than 5 chars
//         const isLongerThanFive = word.length > 5



//         // –––––––– Terms ––––––––

//         const r = randomValue
//         const g = randomValue
//         const b = randomValue
//         // const g = 255
//         // const b = 255
//         const r2 = 255-randomValue
//         const g2 = 255-randomValue
//         const b2 = 255-randomValue

//         // –––––––– Applied ––––––––


//         // Colors
//         span.style.background = "rgb(" + r + ',' + g + ',' + b + ")"
//         span.style.color = "rgb(" + r2 + ',' + g2 + ',' + b2 + ")"


//         // Fonts styling
//         // span.style.textDecoration = "underline"
//         // span.style.transform = "rotate(" + Math.random() * 50 + "deg)"

//         span.innerHTML = word

//         console.log("span", span)

//         paragraph.appendChild(span)

//         const spacer = document.createElement("span")
//         spacer.innerHTML = " "
//         paragraph.appendChild(spacer)

//     })


//     container.appendChild(paragraph)
// }, waitTime);




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





function handleWidth(span, anticipatedWidth, targetHeight){

    // 1. Measure the word BEFORE it gets stretched
    const originalWidth = span.offsetWidth
    const originalHeight = span.offsetHeight

    // const scale = Math.random() 
    const scaleX = anticipatedWidth / originalWidth
    const scaleY = anticipatedHeight / originalHeight

    // 2. Stretch the word (transform does not change the space it takes in the layout!)
    span.style.transformOrigin = "left center"
    span.style.transform = `scale(${scaleX}, ${scaleY})`

    const wrapper = span.parentNode

    // 3. So we tell the wrapper how wide the stretched word really is
    wrapper.style.width = `${anticipatedWidth}px`
    wrapper.style.height = `${anticipatedHeight}px`

}