// DOM => Document Object Model
// getting the DOM, CREATING, ADDING ATTRIBUTE

const title = document.getElementById('title')
console.log(title)
title.textContent = 'Daddda'
title.style.color = 'green'

const paragraphs = document.getElementsByClassName('web')
console.log(paragraphs)
// regurlar for loop
for(const p of paragraphs){
    p.style.color = 'red'
}

// getElementById, //getElementsByTagName, getElementsByClassName
