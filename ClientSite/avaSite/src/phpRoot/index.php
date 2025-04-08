<!-- filepath: /Users/justin/Desktop/CSC372/csc372_projects/ClientSite/avaSite/src/phpRoot/index.php -->
<?php
require_once './components/Navbar.php';
require_once './components/MessageCard.php';
require_once './components/MessagesForm.php';
require_once './helper.php';
require_once './messages.php';


// Fetch and parse messages from the XML file
$messages = parseXMLMessages('./messages.xml');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Messages</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <?php renderNavbar(); ?>

    <div class="main-content">
        <h1>Messages</h1>
        <div class="messages">
    <?php foreach ($messages as $message): ?>
        <?php renderMessageCard($message); ?>
    <?php endforeach; ?>
</div>
        <h2>Send Me a Message!</h2>
        <?php renderMessagesForm(); ?>
    </div>
</body>
</html>