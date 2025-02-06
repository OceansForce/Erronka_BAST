<!DOCTYPE html>
<html>
<head>
    <title>{{ $user->name }} Quiere adoptar a {{ $animal->name }}</title>
</head>
<body>
    <h1>¡Hola, equipo de adopciones!</h1>
    
    <p><strong>{{ $user->name }}</strong> (Correo: {{ $user->email }}) está interesado en adoptar al animal <strong>{{ $animal->name }}</strong>.</p>
    
    <p>Aquí tienes los detalles del animal:</p>
    <p><strong>Nombre:</strong> {{ $animal->name }}</p>
    <p><strong>Foto:</strong></p>
    <img src="{{ $animal->img }}" alt="Foto de {{ $animal->name }}" style="max-width: 300px; height: auto;">
    
    <p>Para proceder con la adopción, por favor confirma la solicitud haciendo clic en el siguiente botón:</p>
    
    <a href="{{ url('/api/verify-adoption/' . $adoptionToken) }}" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">Confirmar adopción</a>
    <a href="{{ url('/api/adop-cancel/' . $adoptionToken) }}" style="padding: 10px 20px; background-color: #f44336; color: white; text-decoration: none; border-radius: 5px; display: inline-block;">Denegar adopción</a>

</body>
</html>
