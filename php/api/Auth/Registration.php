<?php

require '../../database/db.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$user = R::dispense( 'users' );

$user -> username = $_POST['username'];
$user -> password = $_POST['password'];
$user -> email = $_POST['email'];

$newUser = R::store($user);

if ($user) {
  $response = array(
    'status' => 200
  );
} else {
  $response = array(
    'status' => 404
  );
}