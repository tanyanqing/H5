
init ();
function $$(id)
{
	return document.getElementById(id);
}

function init ()
{
}

btnPay_click = function ()
{
	if ($$("paytype_alipay"))
	{
		alert ("paytype_alipay");
	}
	else if ($$("paytype_wx"))
	{
		alert ("paytype_wx");
	}
	else if ($$("paytype_bamboo"))
	{
		alert ("paytype_bamboo");
	}
	else if ($$("paytype_coump"))
	{
		alert ("paytype_coump");
	}
	// var paytypes 	= document.getElementsByName (paytype);
// 	for (var i = 0; i < paytypes.length; i ++)
// 	{
// 		if (paytypes[i].checked)
// 		{
//
// 		}
// 	}
}
click_alipay = function ()
{
	$$("paytype_alipay").checked = true;
}
click_wx = function ()
{
	$$("paytype_wx").checked = true;
}
click_bamboo = function ()
{
	$$("paytype_bamboo").checked = true;
}
click_coump = function ()
{
	$$("paytype_coump").checked = true;
}
