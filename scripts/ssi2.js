function clear_content() {
  // clear variable page elements
  const side = document.getElementById("side"); // hide previous image (innerHTML="" and style.display='none', .removeChild; don't work )
  const img = side.getElementsByTagName("img")[0];
  img.style.display = 'none';
  console.log("Image hidden");
  document.getElementById("main").innerHTML = "";
}
	
function fetch_data(value) {
  // image or text/html?
  const request = value.split(".");
  let section   = request[0];
  let ext       = request[1];
  if ((ext == "png") || (ext == "jpg") || (ext == "jpeg"))
  {
     document.getElementById("side").innerHTML = "<img src='"+value+"' style='float:left;width:100%;display:inline' alt='"+section+"'>";
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
