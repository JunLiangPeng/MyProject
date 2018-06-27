window.onload = function(){
	

$(function(){
	$("#txt1").bind("input propertyinput",function(){
		var val = $("#txt1").val();
		$("#list").html("");
		
		$.ajax({
			type:"get",
			dataType:"jsonp",
			url:"http://rec.mogujie.com/jsonp/recommend/1?callback=?&pid=17721&p_keyWord="+val+"&row=10&_=1529811724798",
			async:true,
			success:function(data){
				console.log(data);
				var str="";
				for(var i in data.data.data){
					if(data.data.data[i].tags){
						str+=`<li>
								<a href="">${data.data.data[i].tag}</a>
									<div class="tags">
										<span>${data.data.data[i].tags[0]["tag"]}</span>
										<span>${data.data.data[i].tags[1]["tag"]}</span>
										<span>${data.data.data[i].tags[2]["tag"]}</span>
									</div>
							    </li>`
					}else{
						str+=`<li>
								<a href="">${data.data.data[i].tag}</a>
							  </li>`
					}
				}
				$("#list").append(str);
				$("#list").find("li").click(function(){
					console.log("aaa");
					window.location.href="http://www.jb51.net";
					
				})
			}
		});
		
	});
	$("#txt1").blur(function(){
		console.log($("#list li a").text());
		$("#list").html("");
	});
	var oPubu = document.getElementsByClassName("pubuliu");
	
	var oNav = document.getElementById("nav_wrap");
	var oNav1 = document.getElementsByTagName("nav")[0];
	var oCount = document.getElementsByClassName("contents")[0];
	var clientWidth = document.documentElement.clientWidth;
	var nLeft = (clientWidth - oNav1.clientWidth)/2;
	//console.log(clientWidth,oNav.clientWidth,nLeft);
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var clientHeight = document.documentElement.clientHeight;
		//console.log(oCount.offsetHeight);
		for(var i = 0;i < oPubu.length; i++){
			if(scrollTop > oPubu[i].offsetHeight - clientHeight && oPubu[i].offsetHeight<=8040){
				//console.log(i);
				var str = "";
				for(var j = 0;j < data.length; j++){
					var a = Math.floor(Math.random()*9);
					str += `<li productId="${data[a].productId}">
							<div class="bg">
								<img src="../${data[a].url}"/>
							</div>
							<div class="price">
								<span>${data[a].price}</span>
								<span>
									<i></i>
									<span>${data[a].count}</span>
								</span>
							</div>
							<div class="tips">
								<span>优选</span>
								<h5>${data[a].title}</h5>
							</div>
						</li>`
				}
				oPubu[i].innerHTML += str;
			}
		}
		if(scrollTop>=200){
			oNav.style.position = "fixed";
			oNav.style.left = nLeft+"px";
			oNav.style.top = 0;
			oNav.style.backgroundColor = "#fff";
			oNav.style.margin = "auto"; 
			oNav.style.borderBottom = "1px solid #ddd";
		}else{
			oNav.style.position = "absolute";
			oNav.style.left = nLeft+"px";
			oNav.style.top = "188px";
			oNav.style.backgroundColor = "#fff";
			oNav.style.margin = "0 auto"; 
			oNav.style.borderBottom = "1px solid #ddd";
		}
		if(scrollTop<=100){
			$(".gettop").css("display","none");
		}else{
			$(".gettop").css("display","block");
		}
	}
	$(".gettop").click(function(){
			$("body,html").animate({scrollTop:0},100);
		})
	
	
	$("#list li").click(function(){
		window.location.href = "html/details.html";
		console.log("aaa");
	})
	
})
}