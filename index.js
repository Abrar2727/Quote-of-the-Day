var quotes = [
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "-- Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "-- Mahatma Gandhi"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "-- Mark Twain"
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "-- Mahatma Gandhi"
    },
    {
        quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        author: "--Ralph Waldo Emerson"
    },
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
        author: "-- Andre Gide"
    },
    {
        quote: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
        author: "-- Albert Einstein"
    },
    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "-- Mark Twain"
    },
    {
        quote: "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
        author: "-- Bill Keane"
    },
    {
        quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
        author: "--Thomas A. Edison"
    }
    ,
    {
        quote: "“If you don't stand for something you will fall for anything.”",
        author: "-- Gordon A. Eadie"
    },
    {
        quote: "“That which does not kill us makes us stronger.”",
        author: "--  Friedrich Nietzsche"
    },
    {
        quote: "“It is never too late to be what you might have been.”",
        author: "-- George Eliot"
    }
];
var quotex = document.getElementById("qoute");
var authorx = document.getElementById("author");
function generate() {
    // console.log("hi");
    var random = Math.floor(Math.random() * quotes.length);

    var randomQ = quotes[random].quote;
    var randomA = quotes[random].author;
    quote.innerHTML = randomQ;
    author.innerHTML = randomA;
}

generate();