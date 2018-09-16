var time 	= 60;
var timeClock;

var registTime 	= 60;
var registTimeClock;
init ();
function $$(id)
{
	return document.getElementById(id);
}

function init ()
{
	$$("login").style.display="block";//显示
	$$("regist").style.display="none";//隐藏
	$$("forget").style.display="none";//隐藏
	$$("title").innerHTML 	= "登录"
	
	var strName=localStorage.getItem("keyName");
	var strPass=localStorage.getItem("keyPass");
	var strChecks=localStorage.getItem("check");
	//判断，如果输入的值等于存储的值
	if(strName)
	{
		$$("user_name").value=strName;
	}
	if(strPass)
	{
		$$("password").value=strPass;
	}
	if (strChecks)
	{
		$$("check").checked="checked"
	}
	
}
//单击登录按钮后调用函数
btnLogin_click = function()
{
	// var strName = $$("user_name").value;//存储文本框的值
	// var strPass = $$("password").value;
	//
	// localStorage.setItem("keyName",strName);
	// if($$("check").checked)
	// {//如果选择保存密码
	// 	localStorage.setItem("keyPass",strPass);//系统存储密码，否则移除
	// }
	// else
	// {
	// 	localStorage.removeItem("keyPass");
	// }
	
	login ();
	
}
btnforget_click = function()
{
	$$("login").style.display="none";
	$$("regist").style.display="none";
	$$("forget").style.display="block";
	$$("title").innerHTML 	= "忘记密码"
	
	clearTimeout(timeClock);
    $$("forget_vercode_button").disabled 	= false;//可点击
	$$("forget_vercode_button").innerHTML 	= "获取"
	time 	= 60;
	
}

btnregist_click = function()
{
	$$("login").style.display="none";
	$$("regist").style.display="block";
	$$("forget").style.display="none";
	$$("title").innerHTML 	= "注册"
	
	clearTimeout(registTimeClock);
    $$("regist_vercode_button").disabled 	= false;//可点击
	$$("regist_vercode_button").innerHTML 	= "获取"
	registTime 	= 60;
	
}
checkbox_click = function ()
{
	if($$("check").checked)
	{
		localStorage.setItem("check", "checked");
	}
	else
	{
		localStorage.removeItem ("check");
	}
}

btnResetPassword_click = function()
{
	
}
getVerCode_click = function ()
{
	timedForgetMsg();
	$$("forget_vercode_button").disabled 	= true;//不可点击
}
function timedForgetMsg()
{
	$$("forget_vercode_button").innerHTML =	time;
    if(time == 0)
	{
        clearTimeout(timeClock);
        $$("forget_vercode_button").disabled 	= false;//可点击
		$$("forget_vercode_button").innerHTML 	= "获取"
		time 	= 60;
    }
	else
	{
    	timeClock = setTimeout('timedForgetMsg()',100);
    }
    time --;
}
btnBack_click	= function ()
{
	$$("login").style.display="block";
	$$("regist").style.display="none";
	$$("forget").style.display="none";
	$$("title").innerHTML 	= "登录"
	
    $$("forget_vercode_button").disabled 	= false;//可点击
	$$("forget_vercode_button").innerHTML 	= "获取"
	time 	= 60;
	$$("forget_user_name").value = "";
	$$("forget_password").value = "";
	$$("forget_confirm_password").value = "";
	$$("forget_vercode").value = "";
	
    $$("regist_vercode_button").disabled 	= false;//可点击
	$$("regist_vercode_button").innerHTML 	= "获取"
	registTime 	= 60;
	$$("regist_user_name").value = "";
	$$("regist_password").value = "";
	$$("regist_confirm_password").value = "";
	$$("regist_vercode").value = "";
}

btnRegist_click	= function ()
{
	
}
getRegistVerCode_click = function ()
{
	timedRegistMsg();
	$$("regist_vercode_button").disabled 	= true;//不可点击
	registTime	= 60;
}
function timedRegistMsg()
{
	$$("regist_vercode_button").innerHTML =	registTime;
    if(registTime == 0)
	{
        clearTimeout(registTimeClock);
        $$("regist_vercode_button").disabled 	= false;//可点击
		$$("regist_vercode_button").innerHTML 	= "获取"
		registTime 	= 60;
    }
	else
	{
    	registTimeClock = setTimeout('timedRegistMsg()',100);
    }
    registTime --;
}
