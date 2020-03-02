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
    let splitExp = expr.split('  ');	
	let word = [];
	let morse = [];
	let decodeString = '';
			
	let round = splitExp[0].length / 10;
	let current = 0;
	let next = current + 10;
	let i = 1;
	
	while(i <= round) {
		let letter = splitExp[0].slice(current, next);		
		word.push(letter);
		current = next;
		next += 10;			
		i++;
	}	
	
	for(let k = 0; k < word.length; k++) {
		let str = '';
		let pos = 0;
			 
		if( word[k].includes('*') ) {
			morse.push(' ');
		} else {

			while(true) {
				let foundPos = word[k].indexOf('1', pos);				
				if(foundPos == -1) break;

				if(word[k].charAt(foundPos+1) == 0) {
					str += '.';				
			    } else {
					 str += '-';	
				}

				pos = foundPos + 2; 
			}
			
			morse.push(str);
		}					
	}
			
	for(let j of morse) {
		if(j == ' ') {
			decodeString += ' ';
		} else {
			decodeString += MORSE_TABLE[j];
		}
	}
					
	return decodeString;
}

module.exports = {
    decode
}