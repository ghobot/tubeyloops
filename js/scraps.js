

    var $pop = Popcorn("#video"),
    //var $pop = Popcorn("#audio"),



        controllers = {
          "playing" : "play",
          "paused"  : "pause"
        },

        timeout;

    console.log( $pop );

    $pop.play().pause();


    function setupCurrentTime( $pop ) {

      if ( setupCurrentTime.dfd === null ) {
        setupCurrentTime.dfd = $.Deferred();
      }

      if ( $pop.media && $pop.media.readyState >= 2 ) {

        setupCurrentTime.dfd.resolve();

      } else {

        setTimeout(function() {
          setupCurrentTime( $pop );
        }, 10);
      }

      return setupCurrentTime.dfd.promise();
    }

    setupCurrentTime.dfd = null;

    $.when( setupCurrentTime( $pop ) ).then(
      function() {
        $pop.currentTime(2);

        $pop.playbackRate(10);
      }
    );

		function playerLoop( callback ) {

			timeout = setTimeout(function() {

				callback();

				playerLoop( callback );

			}, 100 );

		};

    Emit.sender = $(document);

    Emit.sender.bind("sketchControl", function( event, step ) {

      // PLAY/PAUSE Controllers
      //$pop[ controllers[ step.data ] ]();


			/*
      if ( step.data === "playing" ) {
      	playerLoop(function() {

					if ( +( $pop.currentTime() ).toFixed(3) === 2.654 ) {
						$pop.currentTime(2).pause();
					}
      	});
      }
      */

    });

		var KICK = 0,
        SNARE = 1;

    Emit.sender.bind("sketchUpdate", function( event, step ) {

			//console.log( step );
			//console.log( +step.data.channel === SNARE );

      if ( +step.data.channel === SNARE ) {

				if ( $pop.media.paused ) {
					$pop.currentTime(2).play();
				}
        //$pop.currentTime( $pop.currentTime() - 1 );
        $pop.currentTime(2);
      }
    });

    $pop.exec( 3 , function() {
      this.currentTime(2).pause();
    });
  });

