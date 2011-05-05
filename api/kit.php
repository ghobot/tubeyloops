<?php

$uri_data = split( "/", $_SERVER["SCRIPT_NAME"] );
$request = $uri_data[ sizeof($uri_data) - 1 ];

include( "proxy.php" );

?>

