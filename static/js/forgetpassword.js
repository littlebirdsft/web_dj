$(document).ready(function(){

	// newUser();
	/*$("#password").keydown(function(e){
		var curKey = e.which;
		if(curKey == 13){
		$("#login").click();
		return false;
	}
	});*/
});

function newUser() {
    $("#newUser").click(function () {
        if ($("#exampleInputEmail1").val() !="" &&$("#exampleInputPassword1").val() !=""){
            username=$("#exampleInputPassword1").val();
            	$.ajax({
				type:"POST",
			    url:"/newUser",
			    async:false,
			    data:{
					"username" : $("#exampleInputEmail1").val(),
					//"password" : hex_md5($("#password").val().trim())
					"password" : $("#exampleInputPassword1").val().trim()
				},
		        success : function(data){
		        	if(data=="true"){
		        		window.location.href = "/loginPage";
		        		$("#username").html(username);

					}else{
						showMsg(data);
					}
		        }
			});
        }else if($("#exampleInputEmail1").val() == ""&& $("#exampleInputPassword1").val() != ""){
			showMsg("Login name can not be empty!");
		}else if($("#exampleInputEmail1").val() != ""&& $("#exampleInputPassword1").val() == ""){
			showMsg("Password can not be empty!");
		}else if($("#exampleInputEmail1").val() == ""&& $("#exampleInputPassword1").val() == ""){
			showMsg("Please specify login name!");
		}

    });

};


function showMsg(msg){
	$("#errorMsg").html(msg);
}