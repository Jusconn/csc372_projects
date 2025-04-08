<!-- filepath: /Users/justin/Desktop/CSC372/csc372_projects/ClientSite/avaSite/src/phpRoot/components/MessagesForm.php -->
<?php
function renderMessagesForm() {
    // Render the form
    ?>
    <?php
    $message = '';
    $submitted = false;
    
    // Handle form submission
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $message = htmlspecialchars($_POST['message']);
        $submitted = true;
    }
    ?>
    
    <div class="messagesForm">
        <form method="POST" action="">
            <label for="message">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name..." required>
            <textarea
                name="message"
                rows="5"
                maxlength="250"
                placeholder="Enter your message here..."
            ><?php echo htmlspecialchars($message); ?></textarea>
            <button type="submit" id="submit">Send</button>
        </form>
        <p>Max 250 Characters</p>
        <?php if ($submitted): ?>
            <p>Message Submitted!</p>
        <?php endif; ?>
    </div>
<?php
}
?>