<?php

require '../../database/db.php';

$feedbacks = R::getAll( 'SELECT * FROM ads' );

$response = array(
  'adverts' => $feedbacks,
);

echo json_encode($response);