//PAGE DOG
function getDogFact() {
    $.get("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1",
  "",
  function success(data,status) {
    //let dataCat = JSON.parse(data);
    //deja parsé car deja fait par jquery
    parseResponse(data);
  }
  );  
  }
    function parseResponse(dataDog) {
    document.getElementById("data").innerHTML = "<b>" + dataDog["text"] + "</b>";
    }
    
    document.getElementById("logodog").addEventListener("click", getDogFact);
  
    getDogFact();