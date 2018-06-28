

window.onload = function(){
$(function(){
	$("#btn1").click(function(){
		var val1 = $("#txt1").val();
		var val2 = $("#txt2").val();
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{"status":"login","userID":val1,"password":val2},
			async:true,
			success:function(data){
				console.log(data);
				if(data == 0){
					$("#tips").fadeIn().text("用户名输入错误，请重新输入");
					setInterval(function(){
						$("#tips").fadeOut()
					},10000)
				}
				if(data == 2){
					$("#tips").fadeIn().text("服务器内部错误，请稍后重试");
					setInterval(function(){
						$("#tips").fadeOut()
					},10000)
				}
				
				if(data !=0 && data !=2){
					$.cookie("username",val1,{expires:7,path:"/"});
					window.location.href = "../index.html";
				}
				
				
				
				
				
			}
		});
				
		
		
	})
})
}