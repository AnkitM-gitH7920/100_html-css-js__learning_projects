const typedTextSpan = document.querySelector('.typedText');
const cursor = document.querySelector('.cursor'); // Ensure this class exists in HTML

const wordArray = ['Awesome', 'Fun', 'Weird', 'Beginner Friendly :)', 'Life', 'Powerful']; //Your word choice here 
const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

let index = 0;
let charindex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (wordArray.length) {
        setTimeout(type, newWordDelay);
    }
});

function type() {
    if (charindex < wordArray[index].length) {
        typedTextSpan.textContent += wordArray[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(eraseWord, newWordDelay);
    }
}

function eraseWord() {
    if (charindex > 0) {
        typedTextSpan.textContent = wordArray[index].substring(0, charindex - 1);
        charindex--;
        setTimeout(eraseWord, erasingDelay);
    } else {
        index = (index + 1) % wordArray.length; // Loop back to the first word
        setTimeout(type, typingDelay + 500);
    }
}
