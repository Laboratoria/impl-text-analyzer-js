const EMPTY = '';
const SPACE = ' ';
const PUNCTUATION_MARKS = ['.', ',', ';', ':', '"', '¿', '?', '¡', '!', '-', '«', '»', '[', ']', '{', '}', '(', ')'];

const getWords = (text) => {
  //get words from text using a for
  const words = text.split(SPACE);
  return words;
};

const analyzer = {  
  getWordCount: (text) => {
    const trimmedText = text.trim();    
    if(trimmedText.length === 0) {
      return 0;
    }
    const words = getWords(trimmedText);

    return words.length;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const characters = text.split('');
    let noSpaceCount = 0;
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== ' '){
        if(!PUNCTUATION_MARKS.includes(characters[i])) {
          noSpaceCount++;
        }
      }      
    }
    return noSpaceCount;
  },
  getAverageWordLength: (text) => {    
    let totalLength = 0;
    const words = getWords(text);
    if(words.length === 0) {
      return 0;
    }

    for (let i = 0; i < words.length; i++) {
      totalLength = totalLength + words[i].length;
    }
    const average = totalLength / words.length;
    // Round to two decimal places
    return Math.round(average * 100) / 100;
  },
  //sum all numbers in a text
  getNumberCount: (text) => {
    const words = text.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === EMPTY) {
        continue;
      }

      const number = Number(words[i]);
      if (!isNaN(number)) {
        count+=1;
      }
    }
    return count;
  },
  //sum all numbers in a text
  getNumberSum: (text) => {
    const words = text.split(' ');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === EMPTY) {
        continue;
      }

      const number = Number(words[i]);
      if (!isNaN(number)) {      
        sum += number;
      }
    }
    // Round to two decimal places
    return Math.round(sum * 100) / 100;
  },
  
};

export default analyzer;
