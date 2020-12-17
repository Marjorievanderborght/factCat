//Javascript code of random cat
//Pour afficher des faits sur les chats nous utiliserons l'API JSON gratuite suivante : https://cat-fact.herokuapp.com/facts
// un fait sur les chats sera affiché au chargement de la page
// un fait sera chargé à chaque fois qu'on appuiera sur le logo random
//LE $.get va faire appel à la bonne page à afficher
//le get va nous renvoyer un objet

//PAGE CAT
function getCatFact() {
  $.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
"",
function success(data,status) {
  //let dataCat = JSON.parse(data);
  //deja parsé car deja fait par jquery
  parseResponse(data);
}
);  
}
  function parseResponse(dataCat) {
  document.getElementById("data").innerHTML = "<b>" + dataCat["text"] + "</b>";
  }
  
  document.getElementById("logocat").addEventListener("click", getCatFact);

  getCatFact();
  //La function success reçoit les données de la requête $.get