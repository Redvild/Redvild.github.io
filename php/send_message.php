<?
$email = $_POST['email'];
$message_text = $_POST['message'];
$email = htmlspecialchars($email);
$message_text = htmlspecialchars($message_text);
$email = urldecode($email);
$message_text = urldecode($message_text);
$email = trim($email);
$message_text = trim($message_text);
//echo $email;
//echo "<br>";
//echo $message_text;

{
        $to = 'redvild@gmail.com';
        $subject = 'Envato Elite';
        $message = "Message: ".$message_text.". E-mail: ".$email;  
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers = "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>