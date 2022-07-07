


//АЗ


function theImitationGame(array) {
  let message = array.shift(); //взимаме първата част върху която ще работим

  for (let line of array) {
    //въртим през всеки елемент от масива
    let lineInfo = line.split("|"); // и разделяме отделните части на елемента
    let command = lineInfo[0]; // и записваме всяка една от тях под отделна променлива
    let first = lineInfo[1];
    let second = lineInfo[2];

    if (command === "Decode") {
      break;
    }

    switch (command) {
      case "ChangeAll": // заменям всички инстанции от дадено нещо, с друго
        while (message.includes(first)) {
          message = message.replace(first, second);
        }
        break;
      case "Insert":
        let index = Number(first);
        let firstPart = message.substring(0, index); // substring разделя стринга на две, като в случая започва от нулева позиция и продължава до дадения индекс
        let secondPart = message.substring(index, message.length); // substring разделя стринга на две, като в случая започва от дадения индекс и продължава до края на стринга
        message = firstPart + second + secondPart;
        /*             let index = Number(first);
            let messageArray = message.split('')
            messageArray.splice(index, 0, second);
            message = messageArray.join() */
        break;
      case "Move":
        let index2 = Number(first);
        let partOne = message.substring(0, index2); //отделяме първата част от стринга
        let partTwo = message.substring(index2, message.length); //отделяме втората част от стринга
        message = partTwo + partOne; // събираме втората + първата част 
        break;
    }
  }

  console.log(`The decrypted message is: ${message}`);
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame(["owyouh","Move|2","Move|3","Insert|3|are","Insert|9|?","Decode",]);