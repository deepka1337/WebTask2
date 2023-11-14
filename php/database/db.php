<?php

require '../../libs/rb.php';

$host = 'localhost';
$dbname = 'adverts';
$login = 'root';

R::setup("mysql:host=$host;dbname=$dbname", $login);