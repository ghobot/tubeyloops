<?php

//http://patternsketch.com/api/kit.php




 $ch = curl_init("http://patternsketch.com/api/pattern.php");
 curl_setopt($ch, CURLOPT_POST      ,1);
 curl_setopt($ch, CURLOPT_POSTFIELDS    , $_POST );
 curl_setopt($ch, CURLOPT_FOLLOWLOCATION  ,1);
 curl_setopt($ch, CURLOPT_HEADER      ,0);  // DO NOT RETURN HTTP HEADERS
 curl_setopt($ch, CURLOPT_RETURNTRANSFER  ,1);  // RETURN THE CONTENTS OF THE CALL
 $kit_data = curl_exec($ch);

 echo json_encode($kit_data);
?>

