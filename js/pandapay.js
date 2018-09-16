
function login ()
{
	var titleUrl	='http://cms.mycente.com/userRoute/login';
	var json 		= "{'mobile':'13671515236','password':'111111','login_type':'0','app_no':'a86082185502160031'}";
	var form  		= "mobile="+"13671515236"+"&" +"password="+"111111"+"&" +"login_type="+"0"+"&"+"app_no="+"a86082185502160031"+"";
	send (titleUrl, form);
}


function send(url, data)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  	  	xmlhttp 	= new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  	  	xmlhttp 	= new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.onreadystatechange=function()
  	{
  	  	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    	{
    		// document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
			alert  (xmlhttp.responseText);
    	}
  	}
	
	xmlhttp.open("POST", url, true);
	xmlhttp.send(data);
}
