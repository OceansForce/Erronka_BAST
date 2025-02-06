<!DOCTYPE html>
<html>
<head>
    <title>¡Felicidades, {{ $user->name }}! Has adoptado a {{ $animal->name }}</title>
</head>
<body>
    <h1>¡Felicidades, {{ $user->name }}!</h1>
    
    <p>¡Enhorabuena! Estamos felices de anunciar que has adoptado a <strong>{{ $animal->name }}</strong>.</p>
    
    <p>Aquí tienes los detalles de tu nuevo mienbro de la familia:</p>
    <p><strong>Nombre:</strong> {{ $animal->name }}</p>
    <p><strong>Foto:</strong></p>
    <img src="{{ $animal->img }}" alt="Foto de {{ $animal->name }}" style="max-width: 300px; height: auto;">
    
    <p>¡Estamos seguros de que serás un gran compañero para {{ $animal->name }}! Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
    
    <p>¡Gracias por darle un hogar a un animal necesitado!</p>
</body>
</html>
