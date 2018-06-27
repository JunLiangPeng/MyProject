	$(function(){
		$("#btn1").click(function(){
			/*var val1 = $("#txt1").val();
			var val2 = $("#txt2").val();*/
			var data = {"status":"register","userID":$("#txt1").val(),"password":$("#txt2").val()}
			$.ajax({
				type:"post",
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				async:true,
				data:data,
				success:function(data){
					//console.log(data);
					if(data == 0){
						$("#tips").fadeIn().text("该用户名已被注册，请重新注册");
						setInterval(function(){
							$("#tips").fadeOut()
						},5000)
					}
					if(data == 1){
						$("#tips").fadeIn().text("注册成功，请登录");
					}
					if(data == 2){
						$("tips").fadeIn().text("服务器错误，请稍后重试");
						setInterval(function(){
							$("#tips").fadeOut()
						},5000)
					}
				}
			});
		})
	
})



