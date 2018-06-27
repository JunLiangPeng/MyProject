window.onload = function(){
	$(function(){
		var a = $("#num").val();
		$("#add").click(function(){
			
			a++;
			$("#num").val(a++);
		});
		
		$("#minus").click(function(){
			var a = $("#num").val();
			a--;
			if(a<=1){
				a=1;
			}
			$("#num").val(a++);
		});
		
		$("#change").find("img").click(function(){
			$("#change").find("img").removeClass("active");
			$(this).addClass("active");
			var i = $(this).parent().index();
			$(".pic-big").css("background","url(../img/bpic"+i+".jpg) no-repeat left top/cover")
		});
		
		$(".m2").click(function(){
			$(".m2").removeClass("clicked");
			$(this).addClass("clicked");
		})
		
	})
}
