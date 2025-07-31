const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 9007199254740991; // Number.MAX_SAFE_INTEGER

function generateWords(number: number, words: string[] = []): string {
    let remainder = 0;
    let word = '';

    if (number === 0) {
        return words.length === 0 ? 'zero' : words.join(' ').replace(/,$/, '');
    }

    if (number < 0) {
        words.push('minus');
        return generateWords(Math.abs(number), words);
    }

    if (number < 20) {
        word = LESS_THAN_TWENTY[number];
        words.push(word);
        return generateWords(0, words);
    } 
    else if (number < ONE_HUNDRED) {
        remainder = number % 10;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / 10)];
        
        if (remainder > 0) {
            word += '-' + LESS_THAN_TWENTY[remainder];
        }
        
        words.push(word);
        return generateWords(0, words);
    } 
    else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';
        words.push(word);
        return generateWords(remainder, words);
    } 
    else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand';
        words.push(word);
        return generateWords(remainder, words);
    } 
    else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million';
        words.push(word);
        return generateWords(remainder, words);
    } 
    else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion';
        words.push(word);
        return generateWords(remainder, words);
    } 
    else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion';
        words.push(word);
        return generateWords(remainder, words);
    } 
    else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) + ' quadrillion';
        words.push(word);
        return generateWords(remainder, words);
    }

    throw new RangeError('Number is too large');
}