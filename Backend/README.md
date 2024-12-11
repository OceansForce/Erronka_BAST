# API
<details>
<summary> <h2> Translate </h2> </summary>

Link: 
```
http://3.87.235.201:8000/api/translations/keys
```
Header:
```
Content-Type:application/json
```
Body:
```
{
  "keys":[
    "title0",
    "descripcion0"
  ]
}
```
Response:
```
{
  "translations": {
    "descripcion0": {
      "es": "Seguro que sospechabas algo, pero la nariz de tu compa\u00f1ero peludo no solo es un detector infalible de chuches...",
      "eu": "Zerbait susmatzen zenuen, baina zure lagun iletsuaren sudurra ez da soilik goxokiak aurkitzeko detektagailu hutsa..."
    },
    "title0": {
      "es": "La nariz de tu perro es \u00fanica",
      "eu": "Zure txakurraren sudurra bakarra da"
    }
  }
}
```
Response Error:
```
{
  "message": "No translations found for the given keys"
}  
```
</details>

<details>
<summary> <h2> Create user </h2> </summary>
  
Link: 
```
http://3.87.235.201:8000/api/register
```
Header:
```
Content-Type:application/json
```
Body:
```
{
    "DNI": "123987",
    "name": "Guts",
    "secondName": "Alcon",
    "email": "guts@example.com",
    "password": "123maite",
    "password_confirmation": "123maite",
    "year": "2005-01-10",
    "img": "https://proba.com"
}

```
Response:
```
{
  "message": "Usuario creado exitosamente",
  "user": {
    "DNI": "1239878",
    "name": "Casca",
    "secondName": "Alcon",
    "email": "Casca@example.com",
    "year": "2010-10-10T00:00:00.000000Z",
    "id": 3
  }
}
```
Response Error:
```
{
  "message": "Datos incorrectos o incompletos.",
  "errors": {
    "DNI": [
      "The d n i has already been taken."
    ],
    "email": [
      "The email has already been taken."
    ]
  }
}
```
</details>




<details>
<summary> <h2> Login </h2> </summary>
  
Link: 
```
http://3.87.235.201:8000/api/login
```
Header:
```
Content-Type:application/json
```
Body:
```
{
  "email": "guts@example.com",
  "password": "123maite"
}


```
Response:
```
{
  "token": "10|kT6wRtvYA1zHSb7Qj3olUpTE0RJSLl5WZvPIBwq08479c4c5"
}
```
Response Error:
```
{
  "error": "Las credenciales proporcionadas son incorrectas."
}
```
</details>

