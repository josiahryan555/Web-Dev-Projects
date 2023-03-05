let text;
let wordCount;
let characterCount;

// adds an event listener to the text area and calls 'update()' on 'keyup'
document.getElementById("text-box").addEventListener("keyup", update);

// Update function
//   1. changes text in text box to upper case
//   2. updates word counter
//   3. updates character counter
function update() {
    // Converts text to Upper Case and updates text in text box
    text = document.getElementById("text-box").value;
    text = text.toUpperCase();
    console.log(`Text: ${text}`);
    document.getElementById("text-box").value = text;

    // counts and updates character count on the webpage
    characterCount = text.length;
    console.log(`Character Count: ${characterCount}`);
    document.getElementById("character-count").innerHTML = characterCount;

    // counts and updates word count on the webpage
    wordCount = text.split(" ").filter(word => word !== '').length  //https://bobbyhadz.com/blog/javascript-count-words-in-string
    console.log(`Word Count: ${wordCount}`);
    document.getElementById("word-count").innerHTML = wordCount;

    // updates word & character lables to be singular if only there is only 1 (word or char) and plural if there are more or less than 1
    characterCount === 1 ? document.getElementById("char-label").innerHTML = " character" : document.getElementById("char-label").innerHTML = " characters";
    wordCount === 1 ? document.getElementById("word-label").innerHTML = " word" : document.getElementById("word-label").innerHTML = " words";
}