//$(function() { tak wrzucilem na poczatku, ale nie jest to potrzebne do calego kody rozumiem.
    var tweetLink = "https://twitter.com/intent/tweet?text=",
        quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";

    function getQuote() {
        $.getJSON(quoteUrl, createTweet);
    }

    function createTweet(input) {
        if (!input.quoteAuthor.length) {
            input.quoteAuthor = "Unknown author"; //nie deklarujemy zmiennej/parametru quoteAuthor? ona jest na serwerze?
        }
        var tweetText = "Quote of the day - " + input.quoteText + "Author: " + input.quoteAuthor; //quoteText tak samo jw?
        if (tweetText.length > 140) {
            getQuote();
        } else {
            var tweet = tweetLink + encodeURIComponent(tweetText);
            $(".quote").text(input.quoteText);
            $(".author").text("Author: " + input.quoteAuthor);
            $(".tweet").attr('href', tweet);
        }
    }

    $(function() { // czyli nie zawsze musimy wcześniej wszystko załadować, tylko te elementy ktore wymagaja aby np. button juz byl zaladowany. Ja wczesniej cały kod wrzucałem w to ready. Czaje.
        getQuote();
        $(".trigger").click(function() {
            getQuote();
        });
    });
//});