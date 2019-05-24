<?php
$username = null;
$usermail = null;
$userphone = null;
$comment = null;
$info = null;

$sendto = "yr.fotostudio@gmail.com musevich@gmail.com";
if(isset($_GET['name']) > 1) {
    $username = $_GET['name'];
}
if(isset($_GET['email']) > 1) {
    $usermail = $_GET['mail'];
}
if(isset($_GET['phone']) > 1) {
    $userphone = $_GET['phone'];
}
if(isset($_GET['messg']) > 1) {
    $comment = $_GET['messg'];
}
if(isset($_GET['info']) > 1) {
    $info = $_GET['info'];
}
// Формирование заголовка письма
$subject  = "Заказ сайта лендинг Yellow Rabbit";
$headers  = "From: fotorabbit.com.ua\r\n";
$headers .= "Reply-To: fotorabbit.com.ua\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif; font-size: 16px;'>";
$msg .= '<style> td {min-width: 100px; padding: 0 15px;}</style>';
if($username != null) {
    $msg .="<div>Имя:".$username."</div>";
}
if($usermail != null) {
    $msg .="<div>Почта:".$usermail."</div>";
}
if($userphone != null) {
    $msg .="<div>Телефон:".$userphone."</div>";
}
if($comment != null) {
    $msg .="<div>Комментарий:".$comment."</div>";
}
if($info != null) {
    $msg .="<div>Описание:".$info."</div>";
}
$msg .= $letter;
$msg .= "</body></html>";


// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo 'true';
} else {
    echo "false";
}

?>