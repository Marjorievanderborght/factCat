//PAGE CAT
function getHorseFact() {
    $.get("https://cat-fact.herokuapp.com/facts/random?animal_type=horse&amount=1",
  "",
  function success(data,status) {
    //let dataCat = JSON.parse(data);
    //deja parsé car deja fait par jquery
    parseResponse(data);
  }
  );  
  }
    function parseResponse(dataHorse) {
    document.getElementById("data").innerHTML = "<b>" + dataHorse["text"] + "</b>";
    }
    
    document.getElementById("logohorse").addEventListener("click", getHorseFact);
  
    getHorseFact();