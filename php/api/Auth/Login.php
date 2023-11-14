<?php

require '../../database/db.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$user = R::findOne('users', 'username = ? ', [ $_POST['username'] ]);

if ($user) {
  if($_POST['password'] === $user->password) {
    echo json_encode($response = array(
      'auth' => true,
      'status' => 200,
    ));
  }
  else {
    http_response_code(404);
    die();
  }
}
else {
  http_response_code(404);
  die();
}
