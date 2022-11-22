const n = document.getElementById("nom").value;
const p = document.getElementById("prénom").value;
const e = document.getElementById("Email").value;
const t = document.getElementById("Télephone").value;
let y = new RegExp('[0-9]','g');
function redirect(event)
{
    event.preventDefault();
    
    if (n.match(/[0-9]/g)) + (p.match(/[0-9]/g)) && (e == nom.value+"."+prénom.value+"@ofppt.ma") && (y.test(t) == true && t.length == 10 && t[0] == 0 && ( t[1] == 5 || t[1] == 6 || t[1] == 7));{
        document.getElementById("NomOutput").innerHTML = "*Le nom doit pas contenir des nombres";
        document.getElementById("nom" ).style.border = "1px solid #DE0068";
        document.getElementById("PrénomOutput").innerHTML = "* Le nom doit pas contenir des nombres";
        document.getElementById("prénom" ).style.border = "1px solid #DE0068";
        document.getElementById("Email").style.border = "1px solid #59CE8F";
        document.getElementById("emailOutput").innerHTML = "";
        document.getElementById("Télephone").style.border = "1px solid #59CE8F";
        document.getElementById("teleOutput").innerHTML = "";
    } else if(n.length <= 30 && n.length >= 3) +  (p.length < 30 && p.length > 3); {
        document.getElementById("nom").style.border = "1px solid #59CE8F";
        document.getElementById("NomOutput").innerHTML = "";
        document.getElementById("prénom").style.border = "1px solid #59CE8F";
        document.getElementById("PrénomOutput").innerHTML = "";
    } else {
        document.getElementById("NomOutput").innerHTML = "*Votre nom doit comporter entre 3 et 30 caractères";
        document.getElementById("nom" ).style.border = "1px solid #DE0068";
        document.getElementById("teleOutput").innerHTML = "* Veuillez entrer un numéro de téléphone valide";
        document.getElementById("Télephone").style.border = "1px solid #DE0068";
        document.getElementById("emailOutput").innerHTML = "*L'email doit être dans cette formule : Nom.Prénom@ofppt.ma";
        document.getElementById("Email").style.border = "1px solid #DE0068";
        document.getElementById("PrénomOutput").innerHTML = "*Votre nom doit comporter entre 3 et 30 caractères";
        document.getElementById("prénom").style.border = "1px solid #DE0068";
    }


}

  
   
    
    
    
