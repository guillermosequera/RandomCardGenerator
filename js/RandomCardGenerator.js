function myFunction() {
    
    var card = {
        Number: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        Suit: ["&#9824", "&#9829", "&#9827", "&#9830"],
        };

         for(let i = 0; i < card.Suit.length; i = i + 1){


         if (card.Suit === "&#9827" || card.Suit === "&#9824"){
	
         } else if (card.Suit === "&#9829" || card.Suit === "&#9830"){
            
         }
        }
        
        var allNumber = Math.floor(Math.random() * (card.Number.length));
        document.getElementById('randomNumber').innerHTML = card.Number[allNumber];
        
        
        
        var allSuit = Math.floor(Math.random() * (card.Suit.length));
        document.getElementById('topSuit').innerHTML = card.Suit[allSuit];
        
        
        if (card.Suit === "&#9830" || card.Suit === "&#9829") {
            document.getElementById('topSuit').classList.add("redSuit");
        } else {
            document.getElementById('topSuit').classList.add("blackSuit");
        }
         if (card.Suit === "&#9827" || card.Suit === "&#9824"){
             document.getElementById('topSuit').classList.add("blackSuit");           
         } else {
             document.getElementById('topSuit').classList.add("redSuit");                     
         } 
}

