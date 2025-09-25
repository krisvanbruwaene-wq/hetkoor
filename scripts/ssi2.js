function clear_content() {
  // clear variable page elements
  document.getElementById("side").innerHTML = "";
  document.getElementById("main").innerHTML = "";
}

function fetch_data(value, link) {
  // image or text/html?
  const request = value.split(".");
  let section   = request[0];
  let ext       = request[1];
  if ((ext == "png") || (ext == "jpg") || (ext == "jpeg"))
  {
     if (link == "") {
         document.getElementById("side").innerHTML = "<img src='"+value+"' style='float:left;width:100%;' alt='"+section+"'>";
     }
     else
         document.getElementById("side").innerHTML = "<a href='link'><img src='"+value+"' style='float:left;width:100%;' alt='"+section+"'></a>";
     }
  }
  else if (ext == "txt")
  {		  
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("main").innerHTML = this.responseText;
    }
    xhttp.open("GET", value); // async=true
    xhttp.send();
  }
}

/* Idee voor de toekomst: funksie splitsen in fetch_main() en fetch_side()
 * Dan kunnen we ook html (met links naar src=figuur) in de sidebar stoppen.
 * Nadeel: elke pagina met sidebar krijgt dan 2 bestanden (x.txt voor main en x_side.txt voor side)
 * Laden zal vermoedelik ook trager gaan: figuren zelf moeten nadien nog opgehaald worden.
 * Gaat dat vanzelf gebeuren? Waarschijnlik wel: het gebeurt nu ook in fetch_data()
 * nadat we <img src='..' ingevoegd hebben in side.
 
function fetch_data(value, target) {
	const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById(target).innerHTML = this.responseText;
    }
    xhttp.open("GET", value); // async=true
    xhttp.send();
}
*/
