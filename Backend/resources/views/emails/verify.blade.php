<!DOCTYPE html>
<html>
<head>
    <title>Confirmación de correo</title>
</head>
<body>
    <h1>Hola, {{ $user->name }}</h1>
    <p>Gracias por registrarte. Por favor confirma tu correo electrónico haciendo clic en el siguiente enlace:</p>
    <a href="{{ url('/api/verify-email/' . $token) }}">Confirmar correo</a>
</body>
</html>
