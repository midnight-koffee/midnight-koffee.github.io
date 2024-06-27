const quotes = [
  "“Mathematics is the language with which God has written the universe.” — Galileo Galilei",
  "“Mathematics is the music of reason.” — James Joseph Sylvester",
  "“Pure mathematics is, in its way, the poetry of logical ideas.” — Albert Einstein",
  "“The essence of mathematics lies in its freedom.” — Georg Cantor",
  "“Mathematics is the queen of sciences and arithmetic is the queen of mathematics.” — Carl Friedrich Gauss"
];

const quoteElement = document.getElementById('quote-text');

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Display initial quote
displayRandomQuote();

// Rotate quotes every 10 seconds
setInterval(displayRandomQuote, 6000);
