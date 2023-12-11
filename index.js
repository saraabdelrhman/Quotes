var butt = document.getElementById('butt');
var h = document.getElementById('quote');  // Match the ID with the HTML

var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”"
];

butt.onclick = function () {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    h.innerHTML = quotes[randomIndex];
};
