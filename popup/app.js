
// RGB -> HEX

const component_to_hex = c => {

    const hex = c.toString(16)

    return hex.length == 1 ? "0" + hex : hex
    
}
  
const rgb_to_hex = (r, g, b) => "#" + component_to_hex(r) + component_to_hex(g) + component_to_hex(b)

// HEX -> RGB

const hex_to_rgb = (hex) => {

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;

}

// CONVERT STRINGS

function str_to_hex(input) {

    input = input.toLowerCase()
    input = input.replaceAll(' ', '')

    input = input.split('rgb(')
    input = input[input.length - 1]

    input = input.split(')')[0]

    let [r, g, b] = input.split(',')

    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)

    if(r > 255 || r < 0 || g > 255 || g < 0 || b > 255 || b < 0) return null

    return rgb_to_hex(r, g, b)

}

function str_to_rgb(input) {

    input = input.toLowerCase()
    input = input.replaceAll(' ', '')

    return hex_to_rgb(input)

}

// CHECK INPUTS

function visualize_color() {

    const value = document.querySelector('#rgb').value

    const color = str_to_hex(value)

    document.querySelector('#visualize').setAttribute('style', '--color: ' + color)

}

function check_input() {

    const last_focused = document.activeElement

    if(last_focused.tagName != 'INPUT') return

    const value = last_focused.value

    // HEX to RGB
    if(last_focused.id == 'hex') {

        if(value.length > 7) return

        const converted = str_to_rgb(value)

        if(converted == null) return

        const formatted = `rgb(${converted.r}, ${converted.g}, ${converted.b})`

        document.querySelector('#rgb').value = formatted

    }
    
    // RGB to HEX
    else if(last_focused.id == 'rgb') {

        const converted = str_to_hex(value)

        if(converted == null) return

        document.querySelector('#hex').value = converted

    }

    visualize_color()

}

// LISTENERS

document.onkeyup = e => check_input()

document.querySelector('.code-convert-icon').onclick = () => check_input()
