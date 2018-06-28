window.onload = function(){
	$(function(){
		
		var data1 = $.cookie();
		var str = "";
		var arr=[];
		for(var j in data1){
					arr.push(j);
				}
		//console.log(arr);
		for(var i in data1){
			//console.log(i);
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
		}
		$("tbody").append(str);
		
				
		for(var i = 0;i < $(".xiaoji").length;i++){
			var c = $("tbody tr").eq(i).find(".jiage").text().split("￥")[1];
			var d = $("tbody tr").eq(i).find(".shuliang1").val();
			var e = c*d;
			$(".xiaoji").eq(i).text(e.toFixed(2));
		}
		
		//console.log($("tbody tr").length);
		
		for(let m = 0;m < $("tbody tr").length*2;m++){
			$(".shuliang").eq(m).find("span").eq(0).click(function(){
				var a = $(this).next().val();
				//console.log(m)
				a--;
				if(a <= 0){
					a=0;
				}
				$(this).next().val(a);
				var c = $("tbody tr").eq(m).find(".jiage").text().split("￥")[1];
				var d = $("tbody tr").eq(m).find(".shuliang1").val();
				var e = c*d;
				$(".xiaoji").eq(m).text(e.toFixed(2));
				
				
			});
			
			$(".shuliang").eq(m).find("span").eq(1).click(function(){
				var a = $(this).prev().val();
				a++;
				$(this).prev().val(a);
				//console.log(m);
				var c = $("tbody tr").eq(m).find(".jiage").text().split("￥")[1];
				var d = $("tbody tr").eq(m).find(".shuliang1").val();
				var e = c*d;
				$(".xiaoji").eq(m).text(e.toFixed(2));
			});
			
		}
		
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
			
			
			
		});
		$("tbody tr td input[type='checkbox']").change(function(){
			console.log($("tbody tr td input[type='checkbox']:checked").length);
			console.log($("tbody tr").length);
			
			var total = 0;
				for(var i = 0;i<$("tbody tr").length;i++){
					
					if($("tbody").find("tr").eq(i).find("input").prop("checked") == true){
						total+=Number($("tbody").find("tr").eq(i).find(".xiaoji").text());
					}else{
						total+=0;
					}
					
				}
			
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})
}
