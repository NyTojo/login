<?php
$host = "localhost";
$user = "root"; // Remplace par ton utilisateur MySQL
$password = "Lavalavabe2025"; // Remplace par ton mot de passe MySQL
$database = "login_system";

// Connexion à MySQL
$conn = new mysqli($host, $user, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Vérifier si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Vérifier si l'utilisateur existe
    $sql = "SELECT password FROM users WHERE email=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();
        
        // Vérifier le mot de passe avec password_verify()
        if (password_verify($password, $hashed_password)) {
            echo "Connexion réussie !";
        } else {
            echo "Mot de passe incorrect.";
        }
    } else {
        echo "Aucun utilisateur trouvé avec cet email.";
    }
    
    $stmt->close();
}
$conn->close();
?>
