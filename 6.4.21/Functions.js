function getNumber(max = 10, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRGB() {
    return `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`
}
