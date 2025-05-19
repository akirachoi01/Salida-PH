<?php
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$date = date("Y-m-d H:i:s");
$log = "[$date] App started | IP: $ip | UA: $ua\n";
file_put_contents("apk_logs.txt", $log, FILE_APPEND);
echo json_encode(["status" => "logged"]);
