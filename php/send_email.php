<?
$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);
//echo $email;

{
        $to = 'redvild@gmail.com';
        $subject = 'Envato Elite';
        $message = "E-mail: ".$email; 
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers = "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>