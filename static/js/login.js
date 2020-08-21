$(document).ready(function(){
	showLeftTime();
	Login();
	$("#password").keydown(function(e){ 
		var curKey = e.which; 
		if(curKey == 13){ 
		$("#login").click(); 
		return false; 
	} 
	}); 
});
var initializationTime = (new Date()).getTime();
function showLeftTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	document.getElementById("show-time").innerHTML = "" + year + "-" + month + "-" + day + "   "
			+ hours + ":" + minutes + ":" + seconds + "";
	// 一秒刷新一次显示时间
	var timeID = setTimeout(showLeftTime, 1000);
}
var Islogged;
function Login() {
	$("#login").click(function() {
		if ($("#username").val() != "" && $("#password").val() != "") {
			$.ajax({
				type:"POST",
			    url:"/login/",
			    async:false,
			    data:{
					"username" : $("#username").val(),
					//"password" : hex_md5($("#password").val().trim())
					"password" : $("#password").val().trim()
				},
		        success : function(data){
		        	if(data=="true"){
		        		window.location.href = "/index";
					}else{
						showMsg(data);
					}
		        }
			});
			// window.location.href = "/index";
		}else if($("#username").val() == ""&& $("#password").val() != ""){
			showMsg("Login name can not be empty!");
		}else if($("#username").val() != ""&& $("#password").val() == ""){
			showMsg("Password can not be empty!");
		}else if($("#username").val() == ""&& $("#password").val() == ""){
			showMsg("Please specify login name!");
		}
	}


	);
}
function showMsg(msg){
	$("#errorMsg").html(msg);
}