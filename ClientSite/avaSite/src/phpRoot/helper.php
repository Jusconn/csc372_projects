<!-- filepath: /Users/justin/Desktop/CSC372/csc372_projects/ClientSite/avaSite/src/phpRoot/helpers/parseXMLMessages.php -->
<?php
require_once './messages.php';
function parseXMLMessages($filePath) {
    $xml = simplexml_load_file($filePath);
    $messages = [];
    foreach ($xml->message as $message) {
        $messages[] = new Message((string)$message->text, (string)$message->from, (string)$message->date);
    }
    return $messages;
}
?>