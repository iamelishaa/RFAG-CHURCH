<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';   

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $prayer = $_POST['prayer'];

    $mail = new PHPMailer(true);  

    try {
        // Server settings
        $mail->isSMTP();  // Use SMTP
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
        $mail->SMTPAuth = true;  // Enable SMTP authentication
        $mail->Username = 'catherinelawrence498@gmail.com';  // Your Gmail email address
        $mail->Password = 'jcyl voob sbfq snxl';  // Your Gmail password (use an app password if 2FA is enabled)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Encryption method
        $mail->Port = 587;  // SMTP port

        // Sender's email and recipient's email
        $mail->setFrom($email, $name);  // The user's email will appear as the "From" address
        $mail->addAddress('catherinelawrenze@gmail.com');  // Church's email address (destination)

        // Email content
        $mail->isHTML(true);  // Set the email format to HTML
        $mail->Subject = 'Prayer Request from ' . $name;
        $mail->Body    = "<h2>Prayer Request</h2><p><strong>Name:</strong> $name</p><p><strong>Email:</strong> $email</p><p><strong>Prayer Request:</strong><br>$prayer</p>";

        // Send email
        $mail->send();
        echo 'Prayer request sent successfully!';
    } catch (Exception $e) {
        echo "Sorry, there was an error: {$mail->ErrorInfo}";
    }
}
?>
