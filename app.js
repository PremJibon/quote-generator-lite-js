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

    quoteText.innerHTML = data[count].text;
    quoteAuthor.innerHTML = data[count].author;
    
}

//onload
getQuote()
newQuoteBtn.addEventListener("click",getQuote)
