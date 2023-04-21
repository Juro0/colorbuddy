
// TO HEX

let strToHex = (str) => {
    var hex = str.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

let toHex = (rgbInput) => {
    // RGB(255, 255, 255)
    rgbInput = rgbInput.split('RGB(')[1]
    rgbInput = rgbInput.split(')')[0]
    rgbInput = rgbInput.split(', ')
    const r = parseInt(rgbInput[0])
    const g = parseInt(rgbInput[1])
    const b = parseInt(rgbInput[2])
    return "#" + strToHex(r) + strToHex(g) + strToHex(b);
}

// CHECK FOR FOCUS

let isFocused = (el) => {
    return document.activeElement === el
}

// ELEMENTS

const hexElement = document.querySelector('#hex')
const rgbElement = document.querySelector('#rgb')

// FOCUS INPUT

hexElement.focus()
hexElement.value = '#'
rgbElement.value = 'rgb()'

// CLOSE BUTTON
document.querySelector('#close').addEventListener('click', ()=>{
    window.close()
})

// SET COLOR

let newHexInput = () => {
    
    const color = hexElement.value

    try{
        document.querySelector('#color').style.background = color
    } catch {}

}

let newRgbInput = () => {
    
    const color = rgbElement.value

    try{
        document.querySelector('#color').style.background = toHex(color)
    } catch {}

}

// INPUT LISTENERS

setInterval( ()=>{
    if(isFocused(hexElement)){
        newHexInput()
    } else {
        newRgbInput()
    }
}, 50
)
