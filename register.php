<?php
$host = "localhost";
$user = "root";
$password = "Lavalavabe2025";
$database = "login_system";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Création d'un utilisateur avec bcrypt
$email = "nytojo&@gmail.com";
$hashed_password = password_hash("Lavalavabe", PASSWORD_BCRYPT);

$sql = "INSERT INTO users (email, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $hashed_password);
if ($stmt->execute()) {
    echo "Utilisateur ajouté avec succès.";
} else {
    echo "Erreur : " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
