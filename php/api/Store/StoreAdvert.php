<?php

require '../../database/db.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$advert = R::dispense( 'ads' );

$advert -> title = $_POST['title'];
$advert -> description = $_POST['description'];
$advert -> user_id = 1;

$newAdvert = R::store($advert);

if ($newAdvert) {
  http_response_code(200);
} else {
  http_response_code(404);
}

echo json_encode($response);