<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lamentamos que no hayas podido adoptar a {{ $animal->name }}</title>
</head>
<body style="line-height: 1.6; color: #333;">
    <h1 style="color: #cc0000;">Lamentamos que no hayas podido adoptar a {{ $animal->name }}</h1>
    
    <p>Hola {{ $user->name }},</p>
    
    <p>
        Nos entristece comunicarte que, lamentablemente, no se ha podido concretar la adopción de <strong>{{ $animal->name }}</strong>.
    </p>
    
    <p>
        Sabemos lo importante que es para ti brindar un hogar a un animal necesitado, y nos hubiera encantado contar contigo como parte de la familia de {{ $animal->name }}.
    </p>
    
    <p>
        Si tienes alguna pregunta o necesitas más información sobre el proceso o futuras oportunidades, por favor no dudes en ponerte en contacto con nosotros.
    </p>
    
    <p>
        Agradecemos sinceramente tu interés y esperamos poder contar contigo en futuras oportunidades.
    </p>
    
    <p>Un cordial saludo,</p>
    <p>El equipo de Adopciones</p>
</body>
</html>
