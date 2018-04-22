<?php

$adPath = "ad.JSON";

if($_SERVER['REQUEST_METHOD'] == 'GET'){
  try
  {
    $adnum = filter_input(INPUT_GET, 'ad', FILTER_SANITIZE_URL);

    # Read ad from JSON file
    if(is_readable($adPath))  
      $jAd = file_get_contents($adPath);
    else                           
      throw new Exception("Cannot load ad!");

  }
  catch(Exception $e)
  {
    header('HTTP/1.1 400 Bad request'); 
    echo $e->getMessage();
  }

  # Response ad's JSON string
  print $jAd;
}
?>

