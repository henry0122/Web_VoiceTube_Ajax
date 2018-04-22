// Setting var and new ajax request
var adNum = 1;
var ajaxRequest2 = new XMLHttpRequest();

ajaxRequest2.onreadystatechange = function() {
    if(ajaxRequest2.readyState == 4 && ajaxRequest2.status == "200") {
      // get the ajax response successfully
      var adData = ajaxRequest2.responseText;

      // parse JSON string 
      adData = JSON.parse(adData);

      // use renderAdHTML() to add the data into HTML
      renderAdHTML(adData); 
      ajaxRequest2.abort();
    }
}

// Send request to server
var queryString2  = "?ad=";
ajaxRequest2.open('GET', 'ajax_response_ad.php' + queryString2 + String(adNum), true);
ajaxRequest2.send(null);
// End of sending ajax ad's request

// Function for adding response JSON into HTML
function renderAdHTML(jcontent){

	var side = document.getElementById("sidecol");

	for(var i = 0; i < jcontent.length; i++)
	{
	  var newLi = document.createElement("li");
	  var newDiv = document.createElement("div");
	  newLi.appendChild(newDiv);

	  var newA = document.createElement("a");
	  newA.href = jcontent[i].href;
	  newA.target = '_blank';
	  newA.innerHTML = jcontent[i].title;

	  var newDiv2 = document.createElement("div");
	  newDiv2.className = 'short_company';
	  newDiv2.innerHTML = jcontent[i].company;

	  newDiv.appendChild(newA);
	  newDiv.appendChild(newDiv2);

	  side.insertBefore(newLi,null);
	}
}