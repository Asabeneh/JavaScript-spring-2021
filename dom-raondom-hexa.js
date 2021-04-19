
const genHexaColor = () => {
    let str = '0123456789abcdef'
    let hexa = ''
    for(let i = 0; i < 6; i++){
        let index =  Math.floor(Math.random() * str.length)
        hexa = hexa + str[index]
    }
    return '#' + hexa
}

const container = document.getElementById('container')
container.style.display = 'flex'
container.style.flexWrap ='wrap'
container.style.justifyContent = 'center'

for(let i = 0; i < 1000; i++){
    let div = document.createElement('div')
    let color = genHexaColor()
    div.textContent = color
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.color = 'white'
    div.style.fontSize = '18px'
    div.style.textAlign = 'center'
    div.style.lineHeight = '100px'
    div.style.backgroundColor = color
    container.appendChild(div)
    
}

