<?php

class Message {
    public $message;
    public $username;
    public $date;

    public function __construct(string $message,string $username, string $date) {
        $this->message = $message;
        $this->username = $username;
        $this->date = $date;
    }
    public function getMessage(): string {
        return $this->message;
    }
    public function getUsername(): string {
        return $this->username;
    }
    public function getDate(): string {
        return $this->date;
    }
    public function setMessage(string $message): void {
        $this->message = $message;
    }
    public function setUsername(string $username): void {
        $this->username = $username;
    }
    public function setDate(string $date): void {
        $this->date = $date;
    }

}

$message1 = new Message("Hello World", "User1", "2023-10-01 12:00:00");
$message2 = new Message("Hello Europe", "User2", "2023-10-01 12:00:00");
$message3 = new Message("Hello Asia", "User3", "2023-10-01 12:00:00");
$message4 = new Message("Hello South America", "User4", "2023-10-01 12:00:00");
$message5 = new Message("Hello North America", "User5", "2023-10-01 12:00:00");
$message6 = new Message("Hello Africa", "User6", "2023-10-01 12:00:00");

?>