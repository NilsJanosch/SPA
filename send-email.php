<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Validate form data (not shown for brevity)

    // Set email recipient and subject
    $to = "nils.schlegel@schulegossau.ch";
    $subject = "New message from your website";

    // Set email headers
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Set email body
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Phone: " . $phone . "\n";
    $body .= "Message: " . $message . "\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully, redirect to success page
        header("Location: success.html");
        exit();
    } else {
        // Email failed to send, display error message
        $error = "Sorry, there was a problem sending your message. Please try again later.";
    }
}
?>
