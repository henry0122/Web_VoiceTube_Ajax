<?php

if($_SERVER['REQUEST_METHOD'] == 'GET'){
  try
  {
  $capFile = filter_input(INPUT_GET, 'cap', FILTER_SANITIZE_URL);

  $captionPath = 'captions/' . $capFile .'.JSON';
    # Load content from JSON file
    if(is_readable($captionPath))  
      $jCaption = file_get_contents($captionPath);
    else                           
      throw new Exception("Cannot load content!");

  }
  catch(Exception $e)
  {
    header('HTTP/1.1 400 Bad request'); 
    echo $e->getMessage();
  }

  # Response caption's JSON string
  print $jCaption;
  
}
?>