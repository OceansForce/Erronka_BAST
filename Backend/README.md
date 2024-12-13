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
  "user": {
    "DNI": "12345678R",
    "name": "Manex",
    "secondName": "Aranzadi Ega\u00f1a",
    "email": "manex@zubiri.com",
    "year": "2005-01-10T00:00:00.000000Z",
    "rola": "erabiltzaile",
    "idProtektora": null
  },
  "token": "16|kFjHTrpajMNzVl3mFdxyolREya60S9Jr766ip9y0d582b690"
}
```
Response Error:
```
{
  "error": "Las credenciales proporcionadas son incorrectas."
}
```
</details>



<details>
<summary> <h2> Create News </h2> </summary>
  
Link: 
```
http://3.87.235.201:8000/api/news
```
Header:
```
Content-Type:application/json
Authorization:Bearer 2|iUwrUrIzOilpvkowMLL8eLo08oPoTjrkwRdkOdMRf38052b7
```
Body:
```
{
  "titleES": "Título en Español",
  "titleEU": "Titulua euskaraz",
  "textES": "Este es el texto de la noticia en Español",
  "textEU": "Hau da euskarazko albistearen testua"

}



```
Response:
```
{
  "message": "Noticia creada con \u00e9xito",
  "news": {
    "protektora": 1,
    "updated_at": "2024-12-12T10:13:59.000000Z",
    "created_at": "2024-12-12T10:13:59.000000Z",
    "id": 5,
    "title": "title5",
    "text": "news5"
  }
}
```
Response Error:
```
{
  "error": "Las credenciales proporcionadas son incorrectas."
}
```
</details>

