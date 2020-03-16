<?php

require 'phpmailer/PHPMailerAutoload.php';
if(isset($_POST['submit']))
    {
    $email = 'xcellencebpo@gmail.com';                    
    $password = 'New!prazal2016';
    $to_id = 'yadav.pramod@jesuisweb.solutions';    
    
    $name = $_POST['name'];
    $email_add = $_POST['email'];
    $cont_no = $_POST['phone'];
    $message = $_POST['feedback'];
    
    //$bodytext = $message ;    
    $bodytext = '<html><head>';
    $bodytext = '<style>td{border:none}</style>';
    $bodytext = '</head><body>';

    
    $bodytext .= '<table cellpadding="5" border="0">';
    
    $bodytext .= "<tr><td>Hi Team, <br>Please find the enquiry details below</td><td></td></tr>";
    $bodytext .= "<tr><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
    $bodytext .= "<tr><td><strong>Email:</strong> </td><td>" . $email_add . "</td></tr>";
    
    $bodytext .= "<tr><td><strong>Contact No:</strong> </td><td>" . $cont_no . "</td></tr>";
    
    $bodytext .= "<tr><td><strong>Message:</strong> </td><td>" . $message . "</td></tr>";
    $bodytext .= '</table>';
    $bodytext .= "</body></html>";
    
    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587;

    $mail->SMTPSecure = 'tls';

    $mail->SMTPAuth = true;

    $mail->Username = $email;

    $mail->Password = $password;

    $mail->setFrom($email_add, $name);

    $mail->addReplyTo($email_add);

    $mail->addAddress($to_id);

    $mail->Subject = 'Enquiry from website';

    //$mail->msgHTML($bodytext);
    
    $mail->Body = $bodytext;
    $mail->IsHTML(true);

    if (!$mail->send()) {
        $error = "Mailer Error: " . $mail->ErrorInfo;
        ?><script>alert('<?php echo $error ?>');</script><?php
    } 
    else {
        echo '<script> window.location.href = "http://www.jesuisweb.solutions/client-demo/suman-nursery/10022020_1430IST/thankyou.html";</script>';
        
    }
}
?>