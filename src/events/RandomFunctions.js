import AyushColor from "../resources/ayush-color.jpeg"
import AyushThinking from "../resources/ayush-thinking.jpeg"

function getRandomHeaderImage(){
    const imagesArray = [AyushColor, AyushThinking];
    return getRandom(imagesArray)
}

function getRandomQuote() {
    const quotesList = [["The important thing is not to stop questioning. Curiosity has its own reason for existing","Albert Einstein"],
                        ["Research is formalized curiosity. It is poking and prying with a purpose.", "Zora Neale Hurston"]];

    return getRandom(quotesList)
}

function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export {getRandomHeaderImage, getRandomQuote}