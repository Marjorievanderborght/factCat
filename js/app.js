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
        console.log(json);
        parseResponse(json);
      } 
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  function parseResponse(json) {
    document.getElementById("data").innerHTML = "<b>" + json["text"] + "</b>";
  }
  
  document.getElementById("logo").addEventListener("click", randomFact);

  randomFact();