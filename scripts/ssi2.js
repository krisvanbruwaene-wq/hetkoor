function fetch_data(value) {
  const request = value.split(".");
  let section   = request[0];
  let ext       = request[1];
  if ((ext == "png") || (ext == "jpg") || (ext == "jpeg"))
  {
     document.getElementById("side").innerHTML = "<img src='"+value+"'>";
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
