window.onload = function(){
	$(function(){
		$("#add").click(function(){
			var a = $("#num").val();
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
		});
		var id = window.location.href.split("=")[1];
		//console.log(id);
		//console.log(data[id].url)
		$(".pic-big").css("background","url(../"+data[id].url+") no-repeat left top/cover")
		$(".goods-right h1").text(data[id].title);
		$("#pri").text(data[id].price);
		$(".color").css("background","url(../"+data[id].url+") no-repeat 0 0/cover")
		
		$(".addgoods").click(function(){
			
			
			var count = $("#num").val();
			console.log(count);
			
			if($.cookie()[id] == undefined){
				$.cookie(id,count,{expires:7,path:"/"});
			}else{
				count = Number(count)+Number($.cookie()[id]);
				$.cookie(id,count,{expires:7,path:"/"});
			}
			
			
			
			
			$(".addafter").fadeIn();
			$(".addafter div").eq(0).click(function(){
				$(".addafter").fadeOut();
			});
			$(".addafter div").eq(2).click(function(){
				window.location.href = "cart.html";
			})
		});
		
		console.log($.cookie()[id]);
		var arr = [];
	for(var i in data){
		arr.push(i);
	}
	console.log(arr);
	//cdata是cookie数据库里面的数据
	var cdata = $.cookie();
	console.log(cdata);
	var a = 0;
	var arr1 = []
	for(var i in cdata){
		arr1.push(i);
		if(arr.indexOf(i) != -1){
			a+=Number($.cookie()[i]);
		}
		else{
			a = a;
		}
	}
	$("#cartnum1").text(a);
	//if(cdata.indexOf("username"))
	console.log(arr1);
	console.log(arr1.indexOf('username'));
	if(arr1.indexOf("username") != -1){
		console.log(cdata.username);
		$("#user").text(cdata.username).css("color","#FE5979");
	}
		
	})
}
