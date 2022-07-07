//АЗ

// решена с обект

// сортиране на стойност

function wordOccurrences(array) {
  
    let obj = {}

    for (let word of array){ //мианваме през вси1ки елемнти в масива
        if (!obj.hasOwnProperty(word)){ // и казваме, че ако елемента го няма (т.е. е само 1 на брой)
            obj[word] = 1 // стойността към сменящия се ключ трябва да е равна на 1 - {is: 1, the: 1, first: 1, sentence: 1}
        } else {
            obj[word] += 1  // ако пък някоя дума се повтори, добавяме към стойността й 1
        }
    }

        let unsorted = Object.entries(obj); // за писваме всяка двойка елемнти от обекта (ключ и стойност) под нова променлива 
        let sorted = unsorted.sort((a,b) => b[1] - a[1]) // и сортираме
     
        for ([word, accuracy] of sorted){
            console.log(`${word} -> ${accuracy} times`);
        }
  
}
wordOccurrences([
"Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"
]);
  

wordOccurrences([
"dog", "bye", "city", "dog", "dad",
"boys", "ginger"
]);









/* 
// решена с .map

function wordOccurrences(input) {
    let words = new Map();
  
    for (const wordToCheck of input) {
      let counter = 0;
  
      if (words.has(wordToCheck)) {
        continue;
      }
  
      input.forEach(word => {
        if (word === wordToCheck) {
          counter++;
        }
      });
  
      words.set(wordToCheck, counter);
    }
    
    let sorted = Array.from(words)
      .sort((a, b) => b[1] - a[1]);
    
    for (const [key, value] of sorted) {
      console.log(`${key} -> ${value} times`);
    }
  }
  

  wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"
  ]);
  

  wordOccurrences([
    "dog", "bye", "city", "dog", "dad",
    "boys", "ginger"
  ]); */
  
