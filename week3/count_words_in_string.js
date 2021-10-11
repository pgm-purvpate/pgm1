function calculateAmountOfWords(Word) {
    let opuwoorden = Word.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g,"");
    return `de string ${opuwoorden} heeft ${opuwoorden.split(' ').length} aantal woorden`;
}

function calculateAmountOfWords_unique(Word) {
    return Word;
}

console.log(calculateAmountOfWords("dit werkt heel goed"));