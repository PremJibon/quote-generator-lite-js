const quoteText = document.getElementById("text")
const quoteAuthor = document.getElementById("author")
const newQuoteBtn = document.getElementById("newquote")
let count =0

//Get quote from api

async function getQuote(){
    count++
    const apiUrl = 'http://type.fit/api/quotes';
    const res = await fetch(apiUrl)
    const data = await res.json()

    if (count >= data.length) {
        count = 0; // Reset count when it reaches the end of the array
    }

    quoteText.innerHTML = data[count].text;

    // Check if the quote has an author
    if (data[count].author) {
        quoteAuthor.innerHTML = data[count].author;
    } else {
        quoteAuthor.innerHTML = "Unknown"; // Display "Unknown" if there's no author
    }
}

//onload
getQuote()
newQuoteBtn.addEventListener("click",getQuote)