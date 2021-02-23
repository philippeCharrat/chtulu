function validerForm(){
    var log = document.getElementById("log").innerHTML;
    var rech_label = document.getElementById("recherche_label").innerHTML;
    var rech_texte = document.getElementById("recherche_texte").value;
    var new_log = log+"</br>"+rech_label+" "+rech_texte;
    document.getElementById("recherche_texte").value = "";
    document.getElementById("reponse").innerHTML = "";
    
    if (rech_texte.includes("search")) {
      var user  = rech_texte.substr(7);
      console.log("search "+user); 
    }  else if (rech_texte.includes("help")) {
      console.log("help");     
      document.getElementById("reponse").innerHTML = "<ul><li> search user : Cherche un utilisateur </li><li> help : Affiche les commandes </li><li> clear : Afficher les logs </li></ul>";
    } else if (rech_texte.includes("clear")) {
      console.log("help");     
      new_log = "Connexion serveur ASP ... "  
    } else  {
      console.log("nothing");
      document.getElementById("reponse").innerHTML = "Aucune commande ne correspond";
     
    }
    document.getElementById("log").innerHTML = new_log;
    
}