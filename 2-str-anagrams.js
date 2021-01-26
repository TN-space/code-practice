// console.log('awesome');


function anagram(str1, str2) {
    // let result // to check in console

    // if both str have different length, they are not anagrams, return false
    if (str1.length !== str2.length) {
        // result = false
        return false
    }

    let frequencyCounterStr1 = {}, frequencyCounterStr2 = {}

    // lower case both str
    const lowerCasedStr1 = str1.toLowerCase()
    const lowerCasedStr2 = str2.toLowerCase()
    console.log(lowerCasedStr1, lowerCasedStr2)

    // go over each str and catalog each char, as well as the number of each char
    for (let char of lowerCasedStr1) {
        frequencyCounterStr1[char] = (++frequencyCounterStr1[char] || 1)
    }
    for (let char of lowerCasedStr2) {
        frequencyCounterStr2[char] = (++frequencyCounterStr2[char] || 1)
    }
    console.log(frequencyCounterStr1, frequencyCounterStr2)

    // compare both frequency objects to each other
    for (let key in frequencyCounterStr1) {
        if (!(key in frequencyCounterStr2)) {
            // result = false
            // console.log(result)
            return false
        }

        if (lowerCasedStr1[key] !== lowerCasedStr2[key]) {
            // result = false
            // console.log(result)
            return false
        }
    }

    // result = true
    // console.log(result)
    return true

}

anagram('Awesome', 'wEameos')