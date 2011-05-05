<?php

//http://patternsketch.com/api/kit.php


//?cmd=getKitChannels&id=10&format=ogg

#$vars["cmd"] = "getKitChannels";
#$vars["id"] = "10";
#$vars["format"] = "ogg";




$ch = curl_init("http://patternsketch.com/api/" . $request );
curl_setopt($ch, CURLOPT_POST      ,1);
#curl_setopt($ch, CURLOPT_POSTFIELDS    , $vars );
curl_setopt($ch, CURLOPT_POSTFIELDS    , $_POST );
curl_setopt($ch, CURLOPT_FOLLOWLOCATION  ,1);
curl_setopt($ch, CURLOPT_HEADER      ,0);  // DO NOT RETURN HTTP HEADERS
curl_setopt($ch, CURLOPT_RETURNTRANSFER  ,1);  // RETURN THE CONTENTS OF THE CALL
$data = curl_exec($ch);


header('Content-type: application/json');
echo $data;

?>

