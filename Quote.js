var btn = document.getElementById("btn");
var Quote = document.getElementById("quote");
var quoteAuthor = document.getElementById("quote-author");
var quotes = [
  {
    author: "- Oscar Wilde",
    quote: `“Be yourself; everyone else is already taken.”`
  },
  {
    author: "- Marilyn Monroe",
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`
  },
  {
    author: "- Albert Einstein",
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
  },
  {
    author: "- Frank Zappa",
    quote: `“So many books, so little time.”`
  },
  {
    author: "- Marcus Tullius Cicero",
    quote: `“A room without books is like a body without a soul.”`
  },
  {
    author: "- Bernard M. Baruch",
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`
  },
  {
    author: "- William W. Purkey",
    quote: `“You've gotta dance like there's nobody watching,
    And live like it's heaven on earth.”`
  },
  {
    author: "- Dr. Seuss",
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`
  },
  {
    author: "- Mae West",
    quote: `“You only live once, but if you do it right, once is enough.”`
  },
  {
    author: "- Mahatma Gandhi",
    quote: `“Be the change that you wish to see in the world.”`
  },
  {
    author: "- Robert Frost",
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`
  },
  {
    author: "- Albert Camus",
    quote: `“Don’t walk in front of me… I may not follow
       Walk beside me… just be my friend”`
  },
  {
    author: "- Mark Twain",
    quote:  `“If you tell the truth, you don't have to remember anything.”`
  },
  {
    author: "- Maya Angelou",
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`
  },
  {
    author: "- Elbert Hubbard",
    quote: `“A friend is someone who knows all about you and still loves you.”`
  }
];

btn.onclick = function() {
  generateQuote();
};

function generateQuote() {
  var randomIndex = Math.round(Math.random() * quotes.length);
  var quote = quotes[randomIndex];
  Quote.innerText = quote.quote;
  quoteAuthor.innerText =  quote.author;
}
