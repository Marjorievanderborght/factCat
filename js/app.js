//Javascript code of random cat
//Pour afficher des faits sur les chats nous utiliserons l'API JSON gratuite suivante : https://cat-fact.herokuapp.com/facts
// un fait sur les chats sera affiché au chargement de la page
// un fait sera chargé à chaque fois qu'on appuiera sur le logo random
function randomFact() {
   var xmlhttp = new XMLHttpRequest();
   var url = "https://cat-fact.herokuapp.com/facts/random";
   xmlhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseResponse(json);    
       }
   };
   xmlhttp.open("GET", url, true);
   xmlhttp.send();
}

    function parseResponse(json) {
        //réponse JSON est un simple objet contenant des valeurs
        document.getElementById("#data").innerHTML = "<b>" + json["value"] + "</b>";
    }

    // la dernière étape est d'ajouter un click event listener sur le logo du chat pour charger un nouveau random fact
    document.getElementById("#logo").addEventListener("click", function () {
      randomFact();  
    });

    randomFact();
