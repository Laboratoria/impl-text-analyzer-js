import analyzer from './analyzer.js';

const updateMetrics = (text) => {
  const wordCount = analyzer.getWordCount(text);
  const characterCount = analyzer.getCharacterCount(text);
  const averageWordLength = analyzer.getAverageWordLength(text);
  const numberCount = analyzer.getNumberCount(text);
  const numberSum = analyzer.getNumberSum(text);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);  
  document.querySelector('li.metric:nth-child(1)').textContent = "Caracteres: " + characterCount;
  document.querySelector('li.metric:nth-child(2)').textContent = "Caracters Sin Espacios:" + characterCountExcludingSpaces;  
  document.querySelector('li.metric:nth-child(3)').textContent = "Palabras:" + wordCount;
  document.querySelector('li.metric:nth-child(4)').textContent = "Números: " + numberCount;
  document.querySelector('li.metric:nth-child(5)').textContent = "Suma números: " + numberSum;
  document.querySelector('li.metric:nth-child(6)').textContent = "Promedio longitud: " + averageWordLength;
};

const textarea = document.querySelector('textarea[name="user-input"]');
textarea.addEventListener('keyup', () => {
  const text = textarea.value;
  updateMetrics(text);
});

const button = document.getElementById('clear-button');
button.addEventListener('click', () => {
  textarea.value = '';
  updateMetrics('');
});

