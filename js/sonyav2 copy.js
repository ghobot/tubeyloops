(function( $ ) {  

  $.noConflict();

  Popcorn.prototype.stay = function( time ) {
    var byStart = this.data.trackEvents.byStart;
    
    for ( var idx = 0; idx < byStart.length; idx++ ) {
      if ( byStart[ idx ]._natives && 
            byStart[ idx ].start === time && 
              byStart[ idx ]._natives.type === "exec") {

        this.removeTrackEvent( byStart[ idx ]._id );
      }
    }
    return this;
  };


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
      marginLeft: "0px"
    });

    var $videoStack = $("#video-stack"),
        $video = $("<video/>"),
       
        times = [
          {
            in: 12,
            out: 12.7
          },
          {
            in: 17,
            out: 18
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




    /* copy from here down */
    var $timeInputs = $("input[class^='time']"),
        $timeTypes = {
            in: $(".time-in"),
            out: $(".time-out")
        };

    $timeInputs.bind("change blur", function() {
    
      var $this = $(this),
          type = $this.data("type");
      // use the input's index in the collection to point it's data to the
      // correct entry in the times array
      times[ $timeTypes[ type ].index( this ) ][ type ] = parseFloat($this.val());

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
      
           
$clone[0].timeData = times[idx];

      $clone.bind('timeupdate', function() {
      	if (!this.paused && this.currentTime >= this.timeData.out) {
			this.pause();
			this.currentTime = this.timeData.in;
      	}
      });


      $videoStack.append( $clone );

   pops.push( Popcorn( "#" + $clone[0].id ) );
    }

    Emit.sender = $(document);

    Emit.sender.bind("sketchUpdate", function( event, step ) {

      var idx = Emit.last,//+step.channel,
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

      $pop.currentTime( inOut.in ).play();

      $pop.exec(inOut.out , function() {

        this.currentTime( inOut.in ).stay( inOut.out ).pause();

      });
    });

    //---------------------this listens to the url form and displays a preview of the video link---------------------//


 
    $("#videoUrl1").bind('click change' , function() {
      // get the value of the url field when user clicks in it and changes value
      var videourl1 = $("#videoUrl1").val();
      $("#videoPreview1").attr("src", videourl1);
    });

    $("#videoUrl2").bind('click change' , function() {
      var videourl2 = $("#videoUrl2").val();
      $("#videoPreview2").attr("src", videourl2);
    });

    $("#videoUrl3").bind('click change' , function() {
      var  videourl3 = $("#videoUrl3").val(); 
      $("#videoPreview3").attr("src", videourl3);
    });

    $("#videoUrl4").bind('click change' , function() {
      var  videourl4 = $("#videoUrl4").val();
      $("#videoPreview4").attr("src", videourl4);  

    });

    //---------------------this script alters the src values of the videos in the stack---------------------//


    $(".sampleCurrentTime").each(function(){
      $(this).val(parseFloat($(this).val()).toFixed(2));
    });
    
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

//-------this part of the script updates the span that shows length of the video when the video div is clicked -----//

        $("#videoPreview1").bind('click', function() {        
          var displayTime1 = $("#videoPreview1").attr("duration");  

          if (videoPreview1.readyState > 0) {
          $("#videoDuration1").html(Math.round(displayTime1)+" "+"seconds total");
        //  $("#timeIn1").attr("max", displayTime1);
        //  $("#timeOut1").attr("max", displayTime1);

            } else {$("#videoDuration1").html("video length..."); 
                };
            });
            
      //---------- changes the value box next to the slider   -----------//
            $("#timeIn1").bind('change' , function(){
              var timeIn1=$("#timeIn1").val();
              $("#currentTimeIn1").html(timeIn1);
              $("#videoPreview1").attr("currentTime" , timeIn1 )
            });
                
            $("#timeOut1").bind('change' , function(){
              var timeOut1=$("#timeOut1").val();  
                $("#currentTimeOut1").html(timeOut1);
                });

                $('#timeIn1').bind("change" , function() {
                  var timein=$('#timeIn1').val();
                  var timeout=$('#timeOut1').val();
    
                if(timeout<timein){
                //timeout=timein+.1;
                //alert("this is working")
                console.log("this is working")
                }});

        
        
        $("#videoPreview2").bind('click', function() {        
          var displayTime2 = $("#videoPreview2").attr("duration");  
          
          if (videoPreview1.readyState > 0) {
          $("#videoDuration2").html(Math.round(displayTime2)+" "+"seconds total");

            } else {$("#videoDuration2").html("video length..."); 
                };
            });
        $("#videoPreview3").bind('click', function() {        
          var displayTime3 = $("#videoPreview3").attr("duration");  
          
          if ( videoPreview3.readyState > 0 ) {

            $("#videoDuration3").html(Math.round(displayTime3)+" "+"seconds total");

          } else {
            $("#videoDuration1").html("video length..."); 
          };
        });
        $("#videoPreview4").bind('click', function() {        
          var displayTime4 = $("#videoPreview4").attr("duration");  

          if (videoPreview4.readyState > 0) {

            $("#videoDuration4").html(Math.round(displayTime4)+" "+"seconds total");

          } else {
            $("#videoDuration4").html("video length..."); 
          };
        });

    //---------------------these are toggle buttons to hide the sample info---------------------//

    $("#editSample1").click(function() {
      $("#sampleInfo1").slideToggle("slow");
    
     // alert("button is clicked");
    
    });

    $("#editSample2").click(function() {
      $("#sampleInfo2").slideToggle("slow");
    
     // alert("button is clicked");
    
    });


    $("#editSample3").click(function() {
      $("#sampleInfo3").slideToggle("slow");
    
     // alert("button is clicked");
    
    });

    $("#editSample4").click(function() {
      $("#sampleInfo4").slideToggle("slow");
    
     // alert("button is clicked");
    
    });

  //---------------------this displays the duration of the video track inputed---------------------//

    setTimeout(function() {
      jQuery(".stepWidgetChannelTxt:even").hide();

      //jQuery("#divVolume input").val("0");
    }, 1000);
  //  THIS IS WHERE DOM READY ENDS
  });




  
})( jQuery );