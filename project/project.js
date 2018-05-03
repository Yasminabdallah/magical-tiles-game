var myselect=document.getElementById("selectitem");
 var checkarr=[];
 var checknext=[];
 checkptwo=[];
 iteration=0;
 iterationtwo=0;
  var flagenext=true;
 
  
myselect.addEventListener("change",function(){
	drawtable(myselect.value);
	$(".mycol").on("click",checkcolor);
	clearInterval(stop);
	$("#start").html("start");
	$("#next").removeAttr("disabled");
	$("#pervious").removeAttr("disabled");	
	
});
function checkcolor(){
           if (($(this).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
			$(this).css("backgroundColor","white");		
			 }
			 else 
			 {
				
				$(this).css("backgroundColor","blue");
				 
			 }		
	
}
function iterationitem (x)
{
	  var checkpervious=[];
	 
	  checkarr=[];
	  checkarr.splice(0,0,0);
	  
	   var z=0;	
	   var f1=0;
	   var f2=0;
	   var f3=0;
	   var f4=0;
	       	   
			for (j=1;j<=x*x;j++)
			{
					 if (j==1)
					 {
					 
			    var arr=[];  
			    var num=j;
			    var numadd=parseInt(j)+parseInt(x);
			     var numdiaplus=parseInt(j)+parseInt(x)+parseInt(1);
			
		        var elem=document.getElementById(num);
			     var elemfive =document.getElementById(num).nextSibling;
			     var elemseven =document.getElementById(numadd);
                 var elemdiaplus =document.getElementById(numdiaplus); 
						 	 
			 if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);

			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				
				 
			 }
				
			  if(($(elemdiaplus).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var elemdiaplus=1;
				//console.log("have+elemdiaplus" +elemdiaplus); 
				arr.push(elemdiaplus);
				 
			 }
			 else
			 {
				
				  elemdiaplus=0;
				 //console.log("donthave+elemdiaplus"+elemdiaplus); 
				 arr.push(elemdiaplus);
			 }	 
			  if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
				console.log("have+numseven" +numseven); 
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
			    //console.log("donthave+numseven"+numseven);
				arr.push( numseven);
				 
			 }
			  if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive);
				 
			 }
			 else
			 {
				
				 numfive=0;
				// console.log("donthave+numfive"+numfive); 
				 arr.push(numfive);
			 }
			 
			 if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				 // $(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				  checkarr.splice(num,0,check);
				 }
				 else
				 {
					  var check=0;
				    checkarr.splice(num,0,check);
					 
				 }
				 
			}
             if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				 // $(elem).css("backgroundColor","white");
				    var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				// $(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				 checkarr.splice(num,0,check);
					 
				 }
				 
				 
					 
					 
			 }

				
					 }			
			 
			         if (j==x)
					 {
					  var arr=[];  
			          var num=j;
			          var numadd=parseInt(j)+parseInt(x); 
					  var numdiaplustwo=parseInt(j)+parseInt(x)-parseInt(1); 
					 
			          var elem=document.getElementById(num);	
			          var elemfour =document.getElementById(num).previousSibling;	
			          var elemseven =document.getElementById(numadd);
					  var elemdiaplustwo =document.getElementById(numdiaplustwo);
				
           if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			 if(($(elemdiaplustwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var elemdiaplustwo=1;
				 
			    arr.push( elemdiaplustwo);
			 }
			 else
			 {
				
				elemdiaplustwo=0;
				arr.push( elemdiaplustwo);
				 
			 }	 
			 if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
				arr.push( numseven); 
			 }
						 
	   	 if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1;
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;	 
				  arr.push(numfour);	 
			 }
			 
			 if (colorelem==0)
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				   var check=1;
				   checkarr.splice(num,0,check);
				 }
				 else{
					 
					  var check=0;
				      checkarr.splice(num,0,check);
					 
				 }
			}	 
			 if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				{
				   var check=0;
				  checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {

				  var check=1;
				   checkarr.splice(num,0,check);
					 
				 }
				
				 

			}		
	 }
			 
				 if ( j>(1+f4 )&&j<x)
				 {
					var arr=[];  
			        var num=j;	
			        var numadd=parseInt(j)+parseInt(x);
					var numdiaplus=parseInt(j)+parseInt(x)+parseInt(1);
					var numdiaplustwo=parseInt(j)+parseInt(x)-parseInt(1);
			       var elem=document.getElementById(num);	
			       var elemfour =document.getElementById(num).previousSibling;	
                   var elemseven =document.getElementById(numadd);	
				   var elemfive =document.getElementById(num).nextSibling;
				   var elemdiaplus =document.getElementById(numdiaplus);
				   var elemdiaplustwo=document.getElementById(numdiaplustwo);				
           if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			 if(($(elemdiaplustwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplustwo=1;
			    arr.push( numdiaplustwo);
			 }
			 else
			 {
				
				numdiaplustwo=0;
				arr.push( numdiaplustwo);
				 
			 }
			 	 
			 if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
				arr.push( numseven);
				 
			 }
						 
	   	 if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1; 
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;
			 
				  arr.push(numfour);
				 
				 
			 }
			  if(($(elemdiaplus).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplus=1;
			
				arr.push(numdiaplus);
				 
			 }
			 else
			 {
				
				 numdiaplus=0;
			
				 arr.push(numdiaplus);
			 }
			  if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive);
				 
			 }
			 else
			 {
				
				 numfive=0;
				 //console.log("donthave+numfive"+numfive); 
				 arr.push(numfive);
			 }
			 
			 if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				  //$(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				   checkarr.splice(num,0,check);
				 }
				 else{
					 
				  var check=0;
				   checkarr.splice(num,0,check); 
					 
				 }

			}	

             if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				 // $(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				// $(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				  checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","white"); 
					 var check=0;
				   checkarr.splice(num,0,check);
					 
				 }
			
					 
					 
			 }	 
					 
				 }
	
				
				if (j==(((x-1)*x)+1))
				{
					  var arr=[];  
			          var num=j;
			          var numsub=parseInt(j)-parseInt(x);
					  var numdiaminstwo=parseInt(j)-(parseInt(x)-1);
					
					   var elemfive =document.getElementById(num).nextSibling;
			           var elemtwo =document.getElementById(numsub);
					   var elemdiaminstwo=document.getElementById(numdiaminstwo);
					   var elem=document.getElementById(num);
				
			 if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			 if(($(elemdiaminstwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaminstwo=1;
				//console.log("have+numdiaminstwo" +numdiaminstwo); 
				arr.push( numdiaminstwo); 
			 }
			 else
			 {
				
				 numdiaminstwo=0;
				 //console.log("donthave+numdiaminstwo"+numdiaminstwo); 
				 arr.push( numdiaminstwo); 
			 }
			 
			 if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo);
                    arr.push( numtwo); 				
				 
			 }
			 else
			 {
				
				 numtwo=0;
				 //console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo); 	
			 }
			 
			 if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive); 	
				 
			 }
			 else
			 {
				
				 numfive=0;
				 //console.log("donthave+numfive"+numfive); 
				 arr.push(numfive); 	
				 
			 }
			 if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				 // $(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				  checkarr.splice(num,0,check);
				 }
				 else 
				 {
					 var check=0;
				  checkarr.splice(num,0,check);
					 
				 }

			}	
             if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				 // $(elem).css("backgroundColor","white");
				   var check=0;
				  checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				// $(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				 var check=1;
				 checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","rgba(0, 0, 0, 0)"); 
					 var check=0;
				    checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	   
					
					
				}
				  
				if ((j>=(parseInt(x)+1)+f1)&&(j<(((x-1)*x)+1)))
				{
				  	 
			    var arr=[];  
			    var num=j;
			    var numadd=parseInt(j)+parseInt(x);
				var numsub=parseInt(j)-parseInt(x);
			    var numdiaplus=parseInt(j)+parseInt(x)+1;
				var numdiaminstwo=parseInt(j)-(parseInt(x)-1);
			 
		
			 var elem=document.getElementById(num);
			 var elemfive =document.getElementById(num).nextSibling;
			 var elemseven =document.getElementById(numadd);
			 var elemtwo =document.getElementById(numsub);
			 var elemdiaplus =document.getElementById(numdiaplus);
			 var elemdiaminstwo =document.getElementById(numdiaminstwo);	
			 
			 					
           if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]); 
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				 checkpervious.push([num,colorelem]); 
				 
				 
			 }
			 if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo); 
				arr.push( numtwo);
				 
			 }
			 else
			 {
				
				 numtwo=0;
				 //console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo);
				 
			 }
			  if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
				//console.log("have+numseven" +numseven); 
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
			    //console.log("donthave+numseven"+numseven);
				arr.push( numseven);
				 
			 }
				  if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive);
				 
			 }
			 else
			 {
				
				 numfive=0;
				 //console.log("donthave+numfive"+numfive); 
				 arr.push(numfive);
			 }
			  if(($(elemdiaplus).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplus=1;
				console.log("have+numdiaplus" +numdiaplus); 
				arr.push(numdiaplus);
				 
			 }
			 else
			 {
				
				  numdiaplus=0;
				 //console.log("donthave+elemdiaplus"+numdiaplus); 
				 arr.push(numdiaplus);
			 }
			   if(($(elemdiaminstwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaminstwo=1;
				console.log("have+numdiaminstwo" +numdiaminstwo); 
				arr.push(numdiaminstwo);
				 
			 }
			 else
			 {
				
				 numdiaminstwo=0;
				// console.log("donthave+numdiaminstwo"+numdiaminstwo); 
				 arr.push(numdiaminstwo);
			 }
			 if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				  //$(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				  checkarr.splice(num,0,check);
				 }
				 else {
					 
					  var check=0;
				  checkarr.splice(num,0,check);
				 }

			}	

            if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				 // $(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				// $(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				  checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","rgba(0, 0, 0, 0)"); 
					 var check=0;
				     checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	   			
			
			
			
			}		
			
			  if (j==(x*x))
			  {
				  
			    var arr=[];  
			    var num=j;
			    var numsub=parseInt(j)-parseInt(x);
				var numdiamins=parseInt(j)-(parseInt(x)+1);
				
				var elem=document.getElementById(num);
			    var elemfour =document.getElementById(num).previousSibling;
				var elemtwo =document.getElementById(numsub);
				var elemdiamins =document.getElementById(numdiamins);
				 if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			  if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo); 
				arr.push( numtwo);
				 
			 }
			 else
			 {
				
				 numtwo=0;
				 //console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo);
				 
			 }
			  if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1;
				//console.log("have+numfour" +numfour); 
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;
				 //console.log("donthave+numfour"+numfour); 
				  arr.push(numfour);
				 
				 
			 }
			 if(($(elemdiamins).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiamins=1;
				//console.log("have+numdiaminss" +numdiamins); 
				arr.push(numdiamins); 
			 }
			 else
			 {
				
				 numdiamins=0;
				// console.log("donthave+numdiamins"+numdiamins); 
				 arr.push(numdiamins); 
				 
			 }
			 if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				  //$(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				  checkarr.splice(num,0,check);
				 }
				 else {
				   var check=0;
				   checkarr.splice(num,0,check); 
					 
				 }

			}	
            if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				  $(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				 //$(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				  checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","rgba(0, 0, 0, 0)"); 
					 var check=0;
				    checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	   			
				
				  
				  
				  
				  
			  }
			   
			   if (j>((2*x)+f2)&&j<(x*x))
			   {
				
				 var arr=[];  
			      var num=j;	
			var numadd=parseInt(j)+parseInt(x);	
			var numsub=parseInt(j)-parseInt(x);
            var numdiamins=parseInt(j)-(parseInt(x+1));	
			var numdiaplustwo=parseInt(j)+(parseInt(x)-1);	
           
			var elemfour =document.getElementById(num).previousSibling;	
			var elemseven =document.getElementById(numadd);
			var elemtwo =document.getElementById(numsub);
			var elemdiamins =document.getElementById(numdiamins);
			var elemdiaplustwo=document.getElementById(numdiaplustwo); 
			var elem=document.getElementById(num);
              if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
			checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			
			 if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
				//console.log("have+numseven" +numseven); 
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
			    //console.log("donthave+numseven"+numseven);
				arr.push( numseven);
				 
			 }
			 
			 
			 
			 if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo); 
				arr.push( numtwo);
				 
			 }
			 else
			 {
				
				 numtwo=0;
				// console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo);
				 
			 }
			  if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1;
				//console.log("have+numfour" +numfour); 
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;
				 //console.log("donthave+numfour"+numfour); 
				  arr.push(numfour);
				 
				 
			 }
			  if(($(elemdiamins).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiamins=1;
				//console.log("have+numdiaminss" +numdiamins); 
				arr.push(numdiamins); 
			 }
			 else
			 {
				
				 numdiamins=0;
				// console.log("donthave+numdiamins"+numdiamins); 
				 arr.push(numdiamins); 
				 
			 }
			 
			  if(($(elemdiaplustwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplustwo=1;
				//console.log("have+numdiaplustwo" +numdiaplustwo); 
				arr.push(numdiaplustwo); 
			 }
			 else
			 {
				
				 numdiaplustwo=0;
				 //console.log("donthave+numdiaplustwo"+numdiaplustwo); 
				 arr.push(numdiaplustwo); 
				 
			 }
			
			if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				  //$(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				   checkarr.splice(num,0,check);
				 }
				 else{
					 
					var check=0;
				 checkarr.splice(num,0,check);
					 
				 }

			}	

            if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				  //$(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				 //$(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				   checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","rgba(0, 0, 0, 0)"); 
					 var check=0;
				     checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	   			
			
				   
				   
				   
				   
			   }
			  
		   
		   
			   if (j==((((parseInt(x)-1)*x)+2)+f3)&& j<(x*x))
			   {
            var arr=[];  
		    var num=j;	
			var numsub=parseInt(j)-parseInt(x);	
			var numdiamins=parseInt(j)-(parseInt(x)+1);	
			var numdiaminstwo=parseInt(j)+(parseInt(x)-1);
			
		
			 var elem=document.getElementById(num);
			 var elemfour =document.getElementById(num).previousSibling;
			 var elemfive =document.getElementById(num).nextSibling;
			 var elemtwo =document.getElementById(numsub)
			 var elemdiamins =document.getElementById(numdiamins);
			 var elemdiaminstwo=document.getElementById(numdiaminstwo);  
			   if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
				checkpervious.push([num,colorelem]);
				 
				 
			 }
			  if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo); 
				arr.push( numtwo);
				 
			 }
			 else
			 {
				
				 numtwo=0;
				 //console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo);
				 
			 }
			 
			 if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive);
				 
			 }
			 else
			 {
				
				 numfive=0;
				 //console.log("donthave+numfive"+numfive); 
				 arr.push(numfive);
			 }
				  
			 if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1;
				//console.log("have+numfour" +numfour); 
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;
				// console.log("donthave+numfour"+numfour); 
				  arr.push(numfour);
				 
				 
			 }
		 if(($(elemdiamins).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiamins=1;
				//console.log("have+numdiamins" +numdiamins); 
				arr.push(numdiamins); 
			 }
			 else
			 {
				
				 numdiamins=0;
				// console.log("donthave+numdiamins"+numdiamins); 
				 arr.push(numdiamins); 
				 
			 }
			   if(($(elemdiaminstwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaminstwo=1;
				//console.log("have+numdiaminstwo" +numdiaminstwo); 
				arr.push(numdiaminstwo); 
			 }
			 else
			 {
				
				 numdiaminstwo=0;
				 //console.log("donthave+numdiaminstwo"+numdiaminstwo); 
				 arr.push(numdiaminstwo); 
				 
			 } 
			  if ((colorelem==0))
				
			{
				var count=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				  //$(elem).css("backgroundColor","rgb(0, 0, 255)");
				   var check=1;
				 checkarr.splice(num,0,check);
				 }
				 else {
					 
					 var check=0;
				  checkarr.splice(num,0,check);
				 }

			}	
            if (colorelem==1)
		   
			 {
				var countone=0;
				for (var i=0;i<arr.length;i++)
				{
					if (arr[i]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				  //$(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if (countone== 2 || countone ==3)
				 {
					 
				// $(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				 var check=1;
				 checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","rgba(0, 0, 0, 0)"); 
					 var check=0;
				     checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	   			
			   
			   
			 
			   
			   
		   }
		
	    	
	        else{
				
				 var arr=[];  
			    var num=j;
			    var numsub=parseInt(j)-parseInt(x);
			    var numadd=parseInt(j)+parseInt(x);
			    var numdiaplus=parseInt(j)+ parseInt(x)+1;
			    var numdiamins=parseInt(j)-(parseInt(x)+1);
				var numdiaplustwo=parseInt(j)+(parseInt(x)-1);
			    var numdiaminstwo=parseInt(j)-(parseInt(x)-1);
		
			 
			 var elem=document.getElementById(num);
			 var elemfour =document.getElementById(num).previousSibling;
			 var elemfive =document.getElementById(num).nextSibling;
			 //console.log(elemfive);
			 var elemtwo =document.getElementById(numsub);
			 var elemseven =document.getElementById(numadd);
			 var elemdiaplus =document.getElementById(numdiaplus);
			 var elemdiamins =document.getElementById(numdiamins);
			 var elemdiaplustwo =document.getElementById(numdiaplustwo);
			 var elemdiaminstwo=document.getElementById(numdiaminstwo);
			if (($(elem).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				 
				var colorelem =1; 
				checkpervious.push([num,colorelem]);
				 
 
			 }
			 else 
			 {
				 var colorelem =0; 
			    checkpervious.push([num,colorelem]);
				 
				 
			 }
			 
			  if(($(elemdiaplus).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplus=1;
				//console.log("have+numdiaplus" +numdiaplus); 
				arr.push(numdiaplus);
				 
			 }
			 else
			 {
				
				 numdiaplus=0;
				 //console.log("donthave+numdiaplus"+numdiaplus); 
				 arr.push(numdiaplus);
			 }
			  if(($(elemdiamins).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiamins=1;
				//console.log("have+numdiamins" +numdiamins); 
				arr.push(numdiamins); 
			 }
			 else
			 {
				
				 numdiamins=0;
				// console.log("donthave+numdiamins"+numdiamins); 
				 arr.push(numdiamins); 
				 
			 }
			 
			 
			 if(($(elemseven).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numseven=1;
				//console.log("have+numseven" +numseven); 
			    arr.push( numseven);
			 }
			 else
			 {
				
				numseven=0;
			    //console.log("donthave+numseven"+numseven);
				arr.push( numseven);
				 
			 }
			 
			 
			 
			 if(($(elemtwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numtwo=1;
				//console.log("have+numtwo" +numtwo); 
				arr.push( numtwo);
				 
			 }
			 else
			 {
				
				 numtwo=0;
				 //console.log("donthave+numtwo"+numtwo); 
				 arr.push( numtwo);
				 
			 }
			 
			 if(($(elemfive).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfive=1;
				//console.log("have+numfive" +numfive); 
				arr.push(numfive);
				 
			 }
			 else
			 {
				
				 numfive=0;
				 //console.log("donthave+numfive"+numfive); 
				 arr.push(numfive);
			 }
				  
			 if(($(elemfour).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numfour=1;
				//console.log("have+numfour" +numfour); 
				  arr.push(numfour);
			 }
			 else
			 {
				
				 numfour=0;
				 //console.log("donthave+numfour"+numfour); 
				  arr.push(numfour);
				 
				 
			 }
			 if(($(elemdiaplustwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaplustwo=1;
				//console.log("have+numdiaplustwo" +numdiaplustwo); 
				arr.push(numdiaplustwo);
				 
			 }
			 else
			 {
				
				 numdiaplustwo=0;
				 //console.log("donthave+numdiaplus"+numdiaplustwo); 
				 arr.push(numdiaplustwo);
			 }
			  if(($(elemdiaminstwo).css("backgroundColor"))=="rgb(0, 0, 255)")
			 {
				var numdiaminstwo=1;
				//console.log("have+numdiaminstwo" +numdiaminstwo); 
				arr.push(numdiaminstwo); 
			 }
			 else
			 {
				
				 numdiaminstwo=0;
				// console.log("donthave+numdiaminstwo"+numdiaminstwo); 
				 arr.push(numdiaminstwo); 
				 
			 }
			 
		
			if (colorelem==1)
		   
			 {
				var countone=0;
				for (var n=0;n<arr.length;n++)
				{
					if (arr[n]==1)
					{ 
				      countone++;
					}
	
				}
				if (countone<2)
				 {
				  //$(elem).css("backgroundColor","white");
				   var check=0;
				   checkarr.splice(num,0,check);
				 }	 
				 else if ((countone==2)||(countone==3))
				 {
					 
				 //$(elem).css("backgroundColor","rgb(0, 0, 255)") ;
				  var check=1;
				   checkarr.splice(num,0,check);
					 
				 }
				 else if (countone>3)
				 {
					//$(elem).css("backgroundColor","white"); 
					 var check=0;
				      checkarr.splice(num,0,check);
					 
				 }			
					   
					   
			 }	
             	if (colorelem==0)
				
			{
				var count=0;
				for (var k=0;k<arr.length;k++)
				{
					if (arr[k]==1)
					{ 
				      count++;
					}
	
				}
				if (count==3)
				 {
				 // $(elem).css("backgroundColor","rgb(0, 0, 255)");
				  var check=1;
				   checkarr.splice(num,0,check);
				 }
				 else
				 {
					 
				   // $(elem).css("backgroundColor","white"); 
					 var check=0;
				     checkarr.splice(num,0,check);
				 }
				 
					

			}
			
			
		
			}
			f1+=21;
			f2+=20;
			f3++;
			f4++;
			}
		
		   checkptwo[iteration]=checkpervious;
		  
			iteration++;
			for (i=1;i<=x*x;i++)
			{
				if (checkarr[i]==0)
				{
					var checkelem=document.getElementById(i);
					$(checkelem).css("backgroundColor","white") ;
				}
				else 
				{
				  var checkelem=document.getElementById(i);
				   $(checkelem).css("backgroundColor","rgb(0, 0, 255)") ;	
				}
			 	
				
			}
			
			
			iterationtwo=iteration;
          
		 
	}	

	 $("#start").on("click",function(){   
	      	
	        if($("#start").html()=="start")
	            {
				   $(".mycol").off("click",checkcolor);
				   $("#next").attr("disabled","disabled");
			       $("#pervious").attr("disabled","disabled");
		           $("#start").html("pause"); 
                     var timeofdelay=$("#delay").val(); 
					   iteration=0;
				       checkptwo=[];
					x=$("#selectitem").val();
					//console.log(x);
                     stop =setInterval(function(){
					
		                 	iterationitem (x);
						
		                       },timeofdelay);
					
			    }
				 
			else{
			
			clearInterval(stop);
			
			$("#start").html("start");
            $("#next").removeAttr("disabled");
			$("#pervious").removeAttr("disabled");	
			
		   }		
	});		
	 $("#delay").on("change",function()
		{
			if($("#start").html()=="pause")
			{
			clearInterval(stop);
			var timeofdelay=$("#delay").val(); 
			stop =setInterval(function(){
		    x=$("#selectitem").val();
		   // console.log(x);
		    iterationitem (x);
					
			},timeofdelay);
			}
			
			
		});
		
	$("#next").on("click",function(){
			if($("#start").html()=="start")
				{	
			     x=$("#selectitem").val();
				//console.log(x);
				iterationitem(x);
				}
              		  
		     	
			});
			
    $("#reset").on("click ",function()
             {
	 $("#next").removeAttr("disabled");
  	$("#pervious").removeAttr("disabled");
	 $(".mycol").on("click",checkcolor);
	 $(".mycol").css("backgroundColor","white");
	 $("#start").html("start");
	 
	 clearInterval(stop);
	 var size=$("#selectitem").val();
	$("#tab").html("");
	drawtable(size);
	$(".mycol").on("click",checkcolor);
	 iteration=0;
	 checkptwo=[];
	 
	 
	 
	 
 });
 
 
   $("#pervious").on("click",function()
			{ 
			    x=$("#selectitem").val();
				//console.log(x);
				 
				if($("#start").html()=="start")
				{					
		     
				for (k=0;k<checkptwo.length;k++)
				{
					if ((k==(parseInt(iteration))-parseInt(1))&&(k>=0))
                     {	
					for (var n=0;n<(x*x);n++)
					{
					
						var arrprevious=checkptwo[k][n];
						
						elemone=document.getElementById(arrprevious[0]);
						if (arrprevious[1]==1)
						   {
						 $(elemone).css("backgroundColor","rgb(0, 0, 255)") ;
							
						    }
						else{
						$(elemone).css("backgroundColor","white") ;	
							
						    }
				         
					 }

						
					}
					
				}
			
            		
				
				iteration--;
				}
		        
	        });
		    
function drawtable(x){	
 if ($("#selectitem").val()!="")
 {
var tb = document.createElement("table");
tb.setAttribute("border", "2");	
$(tb).css("margin","auto");
$(tb).attr("width","80%");
$(tb).attr("height","50%");

for ( var i=0;i<x;i++)
{
	var row = document.createElement("tr");
	 
		for (j=((i*x)+1);j<=(i+1)*x;j++)
		{
		var col = document.createElement("td");
		$(col).html("&nbsp;");	
		
		$(col).attr("id",j);
		//$(col).html($(col).attr("id"));
		$(col).attr("class","mycol");
        row.appendChild(col);
           		
		
	 }
	
	 tb.appendChild(row);
	
}


$("#tab").html($(tb));

	
}
}
 

