export default function sortWords(words, sortCounter) {
    const originalWordsIndexes = [];
    const originalWords = words.slice()
   
    let shuffledWordsIndexes = [];
    let shuffledWords = [];

    originalWords.forEach((_,index) => {
      originalWordsIndexes.push(index);
    })

    shuffledWordsIndexes = originalWordsIndexes.sort((a,b) => {
        return 0.5 - Math.random();
    })

    originalWords.forEach((_,index) => {
      shuffledWords.push(originalWords[shuffledWordsIndexes[index]])
    })

    if(sortCounter < ((words.length>100)?100:words.length)) {
      sortWords(words,sortCounter+1);
    }

    // returns the original word and it's hidden version
    return ({
      sortedWord: shuffledWords[0],
      sortedWordHidden: shuffledWords[0].replace(/./g, '_ ')
    }) ;
}
