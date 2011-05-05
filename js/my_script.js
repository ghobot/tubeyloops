// this function will query for the typed (on a keyup event)  video url in the field and put that url  in a the video div preview. 
//<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>


$(function() {
/*place jQuery actions here*/
				
               $("#videoUrl1").bind('click change' , function() {
                // get the value of the url field when user clicks in it and changes value
               		 var videourl1 = $("#videoUrl1").val();
                		$("#videoPreview1").attr("src", videourl1);
                		alert(videourl1);
                		
                });
                
                $("#videoUrl2").bind('click change' , function() {
                	 var videourl2 = $("#videoUrl2").val();
                		$("#videoPreview2").attr("src", videourl2);
                });

				$("#videoUrl3").bind('click change' , function() {
                	 var	videourl3 = $("#videoUrl3").val(); 
                		$("#videoPreview3").attr("src", videourl3);
                });
                
                $("#videoUrl4").bind('click change' , function() {
                	 var	videourl4 = $("#videoUrl4").val();
                		$("#videoPreview4").attr("src", videourl4);  
                
                });
                //update the src attribute of the video preview with the typed url.
                
                //alert("this is working now");

 })  

 $(function() {
	$(".editSample").click(function() {
		$("#sampleInfo1").toggle(infoUp, infoDown); 
		//alert("this is working")		
})
	
		function infoUp(evt){
			$("#sampleInfo1").slideUp("slow");
			// pause video
			$("video").trigger("pause");
		}
		
		function infoDown(evt){
			$("#sampleInfo1").slideDown("slow");
		}
})		
	

$(function() {
	$("#editSample1").click(function() {
		$("#sampleInfo1").toggle(function() {
			$("#sampleInfo1").slideUp("slow");
			// pause video
			$("video").trigger("pause");
		}, function() {
			$("#sampleInfo1").slideDown("slow");		
})
})
})
		