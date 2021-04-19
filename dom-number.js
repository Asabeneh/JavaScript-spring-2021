
const container = document.getElementById('container')
container.style.display = 'flex'
container.style.flexWrap ='wrap'
container.style.justifyContent = 'center'

for(let i = 0; i < 1000; i++){
    let div = document.createElement('div')
    div.textContent = i
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.color = 'white'
    div.style.fontSize = '42px'
    div.style.textAlign = 'center'
    div.style.lineHeight = '100px'
    
    if(i % 2 === 0){
        div.style.background = 'green'
    } else {
        div.style.background = 'red'
    }
    container.appendChild(div)
    
}
