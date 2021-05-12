
const str = 'Love is the most important thing in this world. If you do not love it is hard to live. So just start to love something.'

let pattern = /love/gi

const match = str.match(pattern)
console.log(match)
console.log(str.replace(pattern, 'hate'))

// test => true false
// match => null or array
// search => index or  -1
// replace => it replace a substring
console.log(str.replace(pattern, ''))

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const findMostFreqWords = (txt, n) => {
    const freqTable = {}
    const arr =[]
    const words = txt.replace(/[^\w\d\s]/g, '').toLowerCase().split(' ')
    for(const word of words){
        if(freqTable[word]){
            freqTable[word] += 1
        } else {
            freqTable[word] = 1
        }  
    }
    for (const key in freqTable){
        arr.push({word:key, count:freqTable[key]})
    }

    // copying the array and sorting

   const sortedArr = arr.slice().sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
    })
    return sortedArr.slice(0, n)

}
console.log(findMostFreqWords(paragraph, 3))

