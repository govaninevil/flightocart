<?php 
if(isset($_POST['submit'])){
    $to = "care@bigvaluetravels.com"; // this is your Email address
    $name = $_POST['name'];
    $phone = $_POST['phonenumber'];
    $subject = "New Lead Form submission Myflightickets Landing Page";
    $headers = "From:lead@myflightickets.com";

    $message = "Name:" . $name."\nPhone:" . $phone;
    
    $retval = mail($to,$subject,$message,$headers);
         
    if($retval == tru ) {
        header('Location: index.html');
    }else {
        echo "Message could not be sent...";
    }
 }
?>