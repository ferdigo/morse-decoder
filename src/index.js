const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let arr =[]
    
    let result = [];
    let item = "";
    let final = "";
   
    arr = expr.match(/.{1,10}/g);
   
    arr.forEach((element) => {
     item = element.slice(element.indexOf(1, 0));
     result.push(item);
    });
   
    result.forEach((element) => {
     if (element === "*") {
      final += " ";
     } else {
      let start = "";
   
      for (let i = 0; i <= element.length; i = i + 2) {
       if (element.substring(i, i + 2) === "10") start += ".";
       else if (element.substring(i, i + 2) === "11") start += "-";
      }
   
      final += MORSE_TABLE[start];
     }
    });
   
    return final;
}

module.exports = {
    decode
}