function searchLongestWord(str){
    let words = str.split(' ');
    let biggestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0) {
        biggestWord = words[i];
      }
    }
    return biggestWord;
}

console.log(searchLongestWord("Full Stack JavaScript Development"));