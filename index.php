<!doctype html>
<html lang="fr">
<!--Nous ferons apparaître un nouveau fact sur les chats chaque fois que nous cliquerons sur l'image du chat, du chien ou du cheval-->
<head>
  <meta charset="utf-8">
  <title>Création d'un FACT API sur les chats, chiens et chevaux</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<p id="randomindex">RANDOM FACTS</p>
<div>
  <img id="logocat" src="img/cat.png">  
  <img id="logodog" src="img/dog.png">
  <img id="logohorse" src="img/horse.png">
  <div id="data"></div>
</div>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/cat.js"></script>
<script src="js/dog.js"></script>
<script src="js/horse.js"></script>
</html>