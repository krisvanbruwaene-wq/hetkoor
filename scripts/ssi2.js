function clear() {
  // clear variable page elements
  document.getElementById("side").innerHTML = "";
  document.getElementById("main").innerHTML = "";
}
	
function fetch_data(value) {
  // image or text/html?
  const request = value.split(".");
  let section   = request[0];
  let ext       = request[1];
  if ((ext == "png") || (ext == "jpg") || (ext == "jpeg"))
  {
     document.getElementById("side").innerHTML = "<img src='"+value+"' style='float:left;width:100%' alt='"+section+"'>";
  }
  else if (ext == "txt")
  {		  
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById(section).innerHTML = this.responseText;
    }
    xhttp.open("GET", value); // async=true
    xhttp.send();
  }
}
