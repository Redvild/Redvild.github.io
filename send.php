<?
{
        $to = 'hexahedron@yandex.ru';
        $subject = 'Envato User';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Phone: '.$_POST['phone_number'].'</p>     
			<p>E-mail: '.$_POST['email'].'</p>
                        <p>Username: '.$_POST['username'].'</p>                    
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>
