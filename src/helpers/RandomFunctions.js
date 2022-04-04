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

function experienceDisplay(array) {
    return (
        <div key= {array[0]} className='item'>
            <div className='item-image'>
                <img src={array[1]} alt={array[2]}/>
            </div>

            <p><span style={{color: array[4]}}>({array[3]})</span> {array[5]}</p>
        </div>
    )
}

export {getRandomHeaderImage, getRandomQuote, experienceDisplay}