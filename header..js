const quotes = [
    "“The best protection any woman can have... is courage.” ",
    "“A woman is the full circle. Within her is the power to create, nurture and transform.” ",
    "“There is no limit to what we, as women, can accomplish.” ",
    "“Above all, be the heroine of your life, not the victim.”",
    "“The most common way people give up their power is by thinking they don't have any.”"
];

let quoteIndex = 0;
const quoteElement = document.querySelector('.quote-text');

function showNextQuote() {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Initial call to display first quote
showNextQuote();
// Rotate quotes every 10 seconds
setInterval(showNextQuote, 10000);
