<?
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone_number'];
$name = htmlspecialchars($name);
$lastname = htmlspecialchars($lastname);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$lastname = urldecode($lastname);
$name = urldecode($name);
$email = urldecode($email);
$phone = urldecode($phone);
$lastname = trim($lastname);
$name = trim($name);
$email = trim($email);
$phone = trim($phone);
//echo $name;
//echo "<br>";
//echo $lastname;
//echo "<br>";
//echo $email;
//echo "<br>";
//echo $phone;

{
        $to = 'redvild@gmail.com';
        $subject = 'Envato Sponsor';
        $message = "Имя: ".$name.". Фамилия: ".$lastname.". Телефон: ".$phone.". E-mail: ".$email; 
        $headers = "Content-type: text/html; charset=utf-8 \r\n";
        $headers = "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>