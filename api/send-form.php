<?php
/**
 * Endpoint d'envoi du formulaire de demande (n|gel).
 * Reçoit les données en JSON et envoie un email à dbertrand.webdev@gmail.com
 */

header('Content-Type: application/json; charset=utf-8');

// CORS : autoriser la requête depuis le front
// En production, ajoutez l’URL de votre site (ex. https://votresite.fr) au tableau.
$allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://ngelparis.com/',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données invalides']);
    exit;
}

$labels = [
    'productType' => 'Type d\'ouvrage',
    'windowType' => 'Typologie fenêtres',
    'doorType' => 'Typologie portes',
    'shutterType' => 'Typologie volets',
    'gateType' => 'Typologie stores / portes',
    'quantity' => 'Nombre de menuiseries',
    'workType' => 'Type de travaux',
    'postalCode' => 'Code postal',
    'city' => 'Ville',
    'lastName' => 'Nom',
    'firstName' => 'Prénom',
    'email' => 'Email',
    'phone' => 'Téléphone',
    'projectDescription' => 'Description du projet',
];

$lines = ["Nouvelle demande reçue depuis le formulaire n|gel\n"];
foreach ($data as $key => $value) {
    if ($value === '' || $value === null) {
        continue;
    }
    $label = $labels[$key] ?? $key;
    $lines[] = $label . ' : ' . trim($value);
}
$body = implode("\n", $lines);

$to = 'dbertrand.webdev@gmail.com';
$subject = 'n|gel – Nouvelle demande de contact';
$headers = [
    'From: noreply@ngel.fr',
    'Reply-To: ' . ($data['email'] ?? $to),
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi de l\'email']);
}
