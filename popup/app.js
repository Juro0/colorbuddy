
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

// CHECK CORRECT INPUT

let validHexCode = (code) => {
    return /^#([0-6A-F]{3}){1,2}$/i.test(code)
}
let validRgbCode = (code) => {
    return /^rgb[(]([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3})[)]{1,2}$/i.test(code)
}

// SET COLOR

let newHexInput = () => {
    
    const color = hexElement.value

    if(validHexCode(color)){
        document.querySelector('#color').style.background = color
    }

}

let newRgbInput = () => {
    
    const color = rgbElement.value

    if(validRgbCode(color)){
        document.querySelector('#color').style.background = toHex(color)
    }

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
