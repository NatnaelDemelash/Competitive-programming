var sortSentence = function(s) {
    const wordArray = s.split(" ")
    const finalAnswer = []
    for(let i = 0; i < wordArray.length; i++ ){
        const idx = wordArray[i].slice(-1) -1
        finalAnswer[idx] = wordArray[i].slice(0, -1) 
    }
    return finalAnswer.join(" ")
};
