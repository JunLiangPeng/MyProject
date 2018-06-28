window.onload = function(){
	$(function(){
		
		
		//arr是cookie里面的数据
		var data1 = $.cookie();
		var arr=[];
		for(var j in data1){
					arr.push(j);
				}
		console.log(arr);
		//console.log(data1);
		
		
		//arr1是data数据的全部元素
		var arr1 = [];
		for(var i in data){
			arr1.push(i)
		}
		console.log("arr1"+arr1);
		var str = "";
		for(var i in data1){
			console.log(i);
			console.log(arr1.indexOf(i));
			if(arr1.indexOf(i) != -1){
				str+=`<tr>
					<td><input type="checkbox"/></td>
					<td>
						<img src="../${data[i].url}" alt="" />
						<a href="">${data[i].title}</a>
					</td>
					<td>
						<p>颜色：蓝色</p>
						<p>尺码：M</p>
					</td>
					<td>
						<span class="jiage">${data[i].price}</span>
					</td>
					<td class="shuliang">
						<span></span>
						<input type="text" class="shuliang1" value="${$.cookie(i)}"/>
						<span></span>
					</td>
					<td class="xiaoji">
						123
					</td>
					<td>
						<span>删除</span>
					</td>
				</tr>`
			}else{
				str = str;
			}
			
			
		}
		$("tbody").append(str);
		
				
		for(var i = 0;i < $(".xiaoji").length;i++){
			var c = $("tbody tr").eq(i).find(".jiage").text().split("￥")[1];
			var d = $("tbody tr").eq(i).find(".shuliang1").val();
			var e = c*d;
			$(".xiaoji").eq(i).text(e.toFixed(2));
		}
		
		//console.log($("tbody tr").length);
		
		///点击商品后面的加减号让其里面的数值实时变化
		for(let m = 0;m < $("tbody tr").length;m++){
			$(".shuliang").eq(m).find("span").eq(0).click(function(){
				var a = $(this).next().val();
				//console.log(m)
				a--;
				if(a <= 0){
					a=0;
				}
				$(this).next().val(a);
				//console.log(arr);
				//console.log(arr[m])
				$.cookie(arr[m],a,{expires:7,path:"/"});
				var c = $("tbody tr").eq(m).find(".jiage").text().split("￥")[1];
				var d = $("tbody tr").eq(m).find(".shuliang1").val();
				var e = c*d;
				$(".xiaoji").eq(m).text(e.toFixed(2));
				var total = 0;
				for(var i = 0;i<$("tbody tr").length;i++){
					
					if($("tbody").find("tr").eq(i).find("input").prop("checked") == true){
						total+=Number($("tbody").find("tr").eq(i).find(".xiaoji").text());
					}else{
						total+=0;
					}
					
					
				}
			total = total.toFixed(2);
			$("#zonggong").text("￥"+total);
				
			});
			$(".shuliang").eq(m).find("span").eq(1).click(function(){
				var a = $(this).prev().val();
				a++;
				$(this).prev().val(a);
				$.cookie(arr[m],a,{expires:7,path:"/"});
				//console.log(m);
				var c = $("tbody tr").eq(m).find(".jiage").text().split("￥")[1];
				var d = $("tbody tr").eq(m).find(".shuliang1").val();
				var e = c*d;
				$(".xiaoji").eq(m).text(e.toFixed(2));
				//console.log(m);
				var total = 0;
				for(var i = 0;i<$("tbody tr").length;i++){
					
					if($("tbody").find("tr").eq(i).find("input").prop("checked") == true){
						total+=Number($("tbody").find("tr").eq(i).find(".xiaoji").text());
					}else{
						total+=0;
					}
					
					
				}
			total = total.toFixed(2);
			$("#zonggong").text("￥"+total);
				
				
			});
		}
		
		
		/*$(".shuliang").find("span").eq(0).click(function(){
			console.log("aaa");
			console.log($(".shuliang").length);
		})*/
		
		
		
		//arr ["10000", "10001", "10005", "10007"]
		$(".allpic").change(function(){
			console.log($(this).prop("checked"));			
			if($(this).prop("checked") == true){
				$("tr td input[type='checkbox']").prop("checked",true);
				var total = 0;
				for(var i = 0;i<$("tbody tr").length;i++){
					total+=Number($("tbody").find("tr").eq(i).find(".xiaoji").text());
				}
				console.log(total);
				total = total.toFixed(2);
				$("#zonggong").text("￥"+total);
				
			}
			if($(this).prop("checked") == false){
				$("tr td input[type='checkbox']").prop("checked",false);
				$("#zonggong").text("￥"+0.00);
			}
			if($("tbody tr td input[type='checkbox']:checked").length != 0){
				$("#gopay").css("background","#F13E3A");
			}
			if($("tbody tr td input[type='checkbox']:checked").length == 0){
				$("#gopay").css("background","#cecece");
				
			}
			$("#jikuan").text($("tbody tr td input[type='checkbox']:checked").length);
			
			
		});
		$("tbody tr td input[type='checkbox']").change(function(){
			console.log($("tbody tr td input[type='checkbox']:checked").length);
			//console.log($("tbody tr").length);
			
			$("#jikuan").text($("tbody tr td input[type='checkbox']:checked").length);
			
			var total = 0;
				for(var i = 0;i<$("tbody tr").length;i++){
					
					if($("tbody").find("tr").eq(i).find("input").prop("checked") == true){
						total+=Number($("tbody").find("tr").eq(i).find(".xiaoji").text());
					}else{
						total+=0;
					}
					
					
				}
			total = total.toFixed(2);
			$("#zonggong").text("￥"+total);
			
			
			
			if($("tbody tr td input[type='checkbox']:checked").length == $("tbody tr").length){
				$(".allpic").prop("checked",true);
			}
			if($("tbody tr td input[type='checkbox']:checked").length != $("tbody tr").length){
				$(".allpic").prop("checked",false);
			}
			if($("tbody tr td input[type='checkbox']:checked").length != 0){
				$("#gopay").css("background","#F13E3A");
			}
			if($("tbody tr td input[type='checkbox']:checked").length == 0){
				$("#gopay").css("background","#cecece");
			}
		})
		
		//console.log($.cookie());
		/*{10001: "6", 10002: "6", 10006: "18"}*/
		
		
		
		//console.log(arr);
		for(let i = 0; i < $("tbody tr").length; i++){
			$("tbody").find("tr").eq(i).find("td").last().find("span").click(function(){
				$("tbody").find("tr").eq(i).fadeOut();
				$.cookie(arr[i],"",{expires:-7,path:"/"});
			})
			
			
		}
		$("#gopay").click(function(){
			window.open("免费赠送付款页面哈哈哈.html");
		})
		
		
		
		
		
		
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
	$("#cartnum").text(a);
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
