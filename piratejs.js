const quotes = [
    "Arrr! A pirate's life for me!",
    "Dead men tell no tales!",
    "Yo ho ho and a bottle of rum!",
    "Shiver me timbers, we’re going to plunder!",
    "Weigh anchor, hoist the sails!",
    "Not all treasure is silver and gold, mate.",
    "I'll be back on the tide, lads!",
    "The sea calls to me, but treasure calls louder!",
    "I’m a pirate, I don’t take orders!",
    "Aye, ye better watch yer back, matey!",
    "The black flag flies for freedom!",
    "To the ship! We sail to glory and riches!",
    "Plunder and booty, aye, that’s the pirate’s way!",
    "Arrr, I be no landlubber!",
    "Beware the Kraken, ye scallywags!"];
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = randomQuote;
    quoteElement.style.animation = 'none';
    quoteElement.offsetHeight;
    quoteElement.style.animation = 'fadeIn 3s ease-out forwards';}