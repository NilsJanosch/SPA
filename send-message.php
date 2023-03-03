<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $webhookUrl = 'https://discord.com/api/webhooks/1081343090431893684/nhC5BaVpTwu1mWMMm0RDWNDgxH_pPkvDGc-bTSknzqtolchzUEwDA9D0id_1Fc4oen1J'; // replace WEBHOOK_ID and TOKEN with your own values

  $message = $_POST['message'];

  $embed = [
    'title' => 'New Message Received',
    'description' => $message,
    'color' => 0x42a5f5, // set the color of the embed (in this case, a blue color)
    'timestamp' => date('c')
  ];

  $data = [
    'embeds' => [$embed]
  ];

  $ch = curl_init($webhookUrl);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

  $response = curl_exec($ch);
  curl_close($ch);

  // If the message was successfully sent, redirect to a thank you page
  header('Location: thankyou.html');
  exit();
}

?>
