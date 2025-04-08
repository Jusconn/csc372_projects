<!-- filepath: /Users/justin/Desktop/CSC372/csc372_projects/ClientSite/avaSite/src/phpRoot/components/MessageCard.php -->
<?php
require_once './messages.php';
function renderMessageCard(Message $message) {
  echo '<div class="messageCard">
      <h3>From: ' . $message->getUsername() . '</h3>
      <p>' . $message->getMessage() . '</p>
      <p><em>Sent on: ' . $message->getDate() . '</em></p>
      </div>';
}
?>