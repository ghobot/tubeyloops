(function( $ ) {
  $.noConflict();

  $(function() {

    $(document).bind("keydown", function( event ) {
      Emit.last = ({
        81: 0,
        87: 1,
        69: 2,
        82: 3
      })[ event.which ];
    });

    $("#divRightCol").css({
      marginLeft: "0px",
      marginTop: "0px"
    });


/*
$(function() {
 $("#timeIn1").bind('click change' , function() {
                // get the value of the url field when user clicks in it and changes value
               		 var $timeIn1 = $("#timeIn1").val();                		
*/
               


	
	/*
$("#timeIn1").bind("click" , function() {
		$("#timeIn1").val(); 
		});
*/
    var $videoStack = $("#video-stack"),
        $video = $("<video/>"),
       
        times = [
          {
            in: 12,
            out: 12.7
          },
          {
            in: 17,
            out: 18,
          },
          {
            in: 21,
            out: 22
          },
          {
            in: 27,
            out: 28
          }
        ],
        controllers = {
          "playing" : "play",
          "paused"  : "pause"
        },
        KICK = 0,
        SNARE = 1,
        pops = [];

//------------------ rick's new script that injects in and out points into the times array using the indices and specific class ----------------//


/* copy from here down */
var $timeInputs = $("input[class^='time']"),
    $timeTypes = {
        in: $(".time-in"),
        out: $(".time-out")
    };

$timeInputs.bind("change blur", function() {
  
  var $this = $(this);
      type = $this.data("type");
  // use the input's index in the collection to point it's data to the
  // correct entry in the times array
  times[ $timeTypes[ type ].index( this ) ][ type ] = $this.val();

});

//------------------ video stack   ----------------//

    $videoStack.css({
      width: $(window).width(),
      height: $(window).height()
    });

    for ( var idx = 0; idx < 4; idx++ ) {

      var $clone = $video.clone();

      $clone.css({
        "zIndex" : idx,
        "width": $videoStack.width(),
        "height": $videoStack.height(),
        "position": "absolute"
      }).attr({
        id: "video-" + idx,
        src: "../tubeyloops/startrek.theora.ogv"
      });

      $videoStack.append( $clone );

      pops.push( Popcorn( "#" + $clone[0].id ) );
    }

    Emit.sender = $(document);

    Emit.sender.bind("sketchUpdate", function( event, step ) {

      var idx = Emit.last;//+step.channel,
          $pop = pops[ idx ],
          inOut = times[ idx ]; // in/out

      if ( !$pop || !$pop.media ) {
        return;
      }


      $("video").css({
        "zIndex": 995
      }).eq( idx ).css({
        "zIndex": 999
      });

      //if ( $pop.media.paused ) {
        $pop.currentTime( inOut.in ).play();
      //}

      $pop.exec( inOut.out , function() {
        this.currentTime( inOut.in ).pause();
      });

    });
  });
// });

//    Emit.sender.bind("sketchControl", function( event, step ) {
//      // PLAY/PAUSE Controllers
//      //$pop[ controllers[ step ] ]();
//    });


//---------------------this listens to the url form and displays a preview of the video link---------------------//


$(function() {
/*place jQuery actions here*/
				
               $("#videoUrl1").bind('click change' , function() {
                // get the value of the url field when user clicks in it and changes value
               		 var videourl1 = $("#videoUrl1").val();
                		$("#videoPreview1").attr("src", videourl1);
                		//alert(videourl1);
                		
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
//---------------------this script attempts to alter the src values of the videos in the stack---------------------//

$(function() {
				$("#videoUrl1").bind('change blur' , function() { 
						var videourl1 = $("#videoUrl1").val();
							$("#video-0").attr("src" , videourl1);
				});
				$("#videoUrl2").bind('change blur' , function() { 
						var videourl2 = $("#videoUrl2").val();
							$("#video-1").attr("src" , videourl2);
				});
				$("#videoUrl3").bind('change blur' , function() { 
						var videourl3 = $("#videoUrl3").val();
							$("#video-2").attr("src" , videourl3);
				});
				$("#videoUrl4").bind('change blur' , function() { 
						var videourl4 = $("#videoUrl4").val();
							$("#video-3").attr("src" , videourl4);
				});

})
	

/*
$("#videoContainertop1").click(function() {
  $("#sampleInfo1").slideToggle('slow', function() {
    // Animation complete.
  });
});
*/

//---------------------these are toggle buttons for the sample info---------------------//
$(function() {
$("#editSample1").click(function() {
      $("#sampleInfo1").slideToggle("slow");
      
     // alert("button is clicked");
      
    });
})

$(function() {
$("#editSample2").click(function() {
      $("#sampleInfo2").slideToggle("slow");
      
     // alert("button is clicked");
      
    });
})

$(function() {
$("#editSample3").click(function() {
      $("#sampleInfo3").slideToggle("slow");
      
     // alert("button is clicked");
      
    });
})

$(function() {
$("#editSample4").click(function() {
      $("#sampleInfo4").slideToggle("slow");
      
     // alert("button is clicked");
      
    });
})






  setTimeout(function() {
    jQuery(".stepWidgetChannelTxt:even").hide();

    //jQuery("#divVolume input").val("0");
  }, 1000);
})( jQuery );

