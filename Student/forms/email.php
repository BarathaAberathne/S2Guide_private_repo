<?php 
if($_POST){
    $name = $_POST['name'];
    $toemail = $_POST['email'];
    $message = $_POST['message'];
    $admin_email = "barathaaberathne@gmail.com";
    $mailHeaders = "From: Admin " . "<". $admin_email .">\r\n";

    if(mail($toEmail,"Your eligible list at SLIIT",$message,$mailHeaders)){
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
    }
?>
