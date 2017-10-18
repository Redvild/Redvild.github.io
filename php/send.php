<?
$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone_number'];
$name = htmlspecialchars($name);
$username = htmlspecialchars($username);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$username = urldecode($username);
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$username = trim($username);
$name = trim($name);
$email = trim($email);
$phone = trim($phone);
//echo $name;
//echo "<br>";
//echo $username;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $phone;

{
        $to = 'redvild@gmail.com';
        $subject = 'Envato User';
        $message = "Имя: ".$name.". Фамилия: ".$username.". Телефон: ".$phone.". E-mail: ".$email; 
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers = "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>