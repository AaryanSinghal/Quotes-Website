let quotes = document.getElementById("quotes_id");
let author = document.getElementById("author_id");
let NewQ = document.getElementById("newQuote");
let MakeTweet = document.getElementById("MakeTweet");

let realData = "";
let QuotesData = "";

const TweetME = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${QuotesData.text}`;
    window.open(tweetPost);
};

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1500);
    QuotesData = realData[rnum];
    quotes.innerText = `${QuotesData.text}`;
    QuotesData.author == null ? (author.innerText = "Unknown") : (author.innerText = `${QuotesData.author}`);
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {
        
    }
};

NewQ.addEventListener("click", getNewQuotes);
MakeTweet.addEventListener("click", TweetME);

getQuotes();

