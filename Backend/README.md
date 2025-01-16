# API
<details>
<summary> <h2> Translate </h2> </summary>

Link: 
```
http://bastbackend.ddns.net:8000/api/translations/keys
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
http://bastbackend.ddns.net:8000/api/register
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
http://bastbackend.ddns.net:8000/api/login
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
    
<summary> <h2> Get User Data </h2> </summary>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/user-data
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Response:
```
{
    "user": {
        "id": 1,
        "DNI": "123456789A",
        "name": "Juan",
        "secondName": "Pérez",
        "email": "juan.perez@ejemplo.com",
        "year": "1990-05-20",
        "img": "http://urlimagen.com/imagen.jpg"
    },
    "animals": [
        {
            "id": 1,
            "name": "Fido",
            "type": "txakurra",
            "animalType": "Perro",
            "img": "http://urlimagen.com/fido.jpg",
            "bakuna": true,
            "gender": "Macho",
            "descripcion": "Perro muy amigable",
            "year": "2020",
            "losted": false,
            "noiztik": "2023-01-01",
            "userID": 1
        },
        {
            "id": 2,
            "name": "Mimi",
            "type": "katua",
            "animalType": "Gato",
            "img": "http://urlimagen.com/mimi.jpg",
            "bakuna": true,
            "gender": "Hembra",
            "descripcion": "Gato tranquilo",
            "year": "2019",
            "losted": false,
            "noiztik": "2022-12-01",
            "userID": 1
        }
    ]
}

```
Response Error:
```
{
        "error": "Usuario no autenticado"
}
```
</details>

<details>
    
<summary> <h2> Edit User Data </h2> </summary>
<p> **Put** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/user-data-edit
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```
{
    "DNI": "123456789B",
    "name": "Juan",
    "secondName": "García",
    "email": "juan.garcia@ejemplo.com",
    "password": "nuevaContraseña123",
    "year": "1991-06-15",
    "img": "http://urlimagen.com/nueva-imagen.jpg"
}
```
Response:
```
{
    "message": "Usuario actualizado exitosamente",
    "user": {
        "id": 1,
        "DNI": "123456789B",
        "name": "Juan",
        "secondName": "García",
        "email": "juan.garcia@ejemplo.com",
        "year": "1991-06-15",
        "img": "http://urlimagen.com/nueva-imagen.jpg"
    }
}


```
Response Error:
```
{
    "message": "Datos incorrectos o incompletos.",
    "errors": {
        "email": ["El correo electrónico ya está en uso."]
    }
}
{
    "message": "Ocurrió un error al actualizar los datos del usuario.",
    "error": "Error en la base de datos"
}

```
</details>

<summary> <h2> Delete User </h2> </summary>
<p> **Delete** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/user-delete
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```

```
Response:
```
{
    "message": "Usuario borrato exitosamente",
}
```
Response Error:
```
{
    "error": "Usuario no autenticado"
}

```
</details>

<details>
    
<summary> <h2> Add protectora to user </h2> </summary>
<p> **Put** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/user-add-protectora
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```
{
    "email": "usuario@example.com"
}
```
Response:
```
{
    "message": "Protector asignado exitosamente al usuario.",
    "user": {
        "id": 2,
        "email": "usuario@example.com",
        "idProtektora": 1,  // idProtektora asignado al usuario
        "created_at": "2025-01-10T12:34:56.000000Z",
        "updated_at": "2025-01-10T12:34:56.000000Z"
    }
}
```
Response Error:
```
{
    "message": "El email no existe."
}
{
    "message": "El usuario ya tiene asignada una protectora."
}
{
    "error": "El usuario no tiene asignada una protectora."
}
{
    "message": "Ocurrió un error al asignar la protectora al usuario.",
    "error": "Mensaje de error específico"
}

```
</details>

<details>
<summary> <h2> Create News </h2> </summary>
  
Link: 
```
http://bastbackend.ddns.net:8000/api/news
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
  "textEU": "Hau da euskarazko albistearen testua",
  "img": https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg
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
    "text": "news5",
  "img": https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg
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

<details>
<summary> <h2> Obtein News </h2> </summary>
<p> **Get** bitartez egin behar da</p>
Link: 
<p>Protektora_id is optional</p>
    
```
http://bastbackend.ddns.net:8000/api/latest-news?count=5&offset=10&protektora_id=1
```
Header:
```
Content-Type:application/json
```
Response:
```
[
  {
    "id": 6,
    "text": "news6",
    "protektora": 1,
    "created_at": "2024-12-12T10:14:34.000000Z",
    "updated_at": "2024-12-12T10:14:34.000000Z",
    "title": "title6",
    "img": "url"
  },
  {
    "id": 5,
    "text": "news5",
    "protektora": 1,
    "created_at": "2024-12-12T10:13:59.000000Z",
    "updated_at": "2024-12-12T10:13:59.000000Z",
    "title": "title5",
    "img": "url"
  }
]
```
Response Error:
```
{
  "error": "Las credenciales proporcionadas son incorrectas."
}
```
</details>

<details>
<summary> <h2> Obtein a New </h2> </summary>
<p> **Get** bitartez egin behar da</p>
Link: 
<p>Protektora_id is optional</p>
    
```
http://bastbackend.ddns.net:8000/api/new-obtein/45
```
Header:
```
Content-Type:application/json
```
Response:
```
{
  "id": 45,
  "created_at": "2024-12-18T07:54:13.000000Z",
  "updated_at": "2024-12-18T07:54:13.000000Z",
  "img": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcSO7bOfBsmhU_djVmxnh_aWU0oUSOYLY4RASg&s",
  "text_translations": [
    {
      "keyValue": "news45",
      "language": "es",
      "value": "La adopci\u00f3n de perros ha ganado popularidad en los \u00faltimos a\u00f1os, con un creciente n\u00famero de personas que eligen adoptar en lugar de comprar mascotas. Este cambio en la mentalidad "
    },
    {
      "keyValue": "news45",
      "language": "eu",
      "value": "Zakurren adopzioak ospea irabazi du azken urteetan, gero eta gehiago dira animaliak erostea baino adoptatzea aukeratzen duten pertsonak. Mentalitate honetan egon den aldaketa honek abandonatutako animalien kopurua"
    }
  ],
  "title_translations": [
    {
      "keyValue": "title45",
      "language": "es",
      "value": "Adopci\u00f3n de perros en lugar de compra: un cambio en la mentalidad"
    },
    {
      "keyValue": "title45",
      "language": "eu",
      "value": "Zakurren adopzioa erosketaren ordez: mentalitatean aldaketa bat"
    }
  ]
}
```
Response Error:
```
{
    "error": "Noticia no encontrada"
}

```
</details>

<details>
    
<summary> <h2> Update News </h2> </summary>
<p> **Put** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/news/50
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```
{
   "titleES": "Nuevo título en español",
   "titleEU": "Berriaren izenburua euskaraz",
   "textES": "Texto de la noticia en español.",
   "textEU": "Albistearen testua euskaraz111.",
   "img": "https://ejemplo.com/imagen.jpg"
 }
```
Response:
```
{
  "message": "Noticia actualizada con \u00e9xito",
  "news": {
    "id": 50,
    "text": "news50",
    "protektora": 1,
    "created_at": "2025-01-07T12:05:45.000000Z",
    "updated_at": "2025-01-07T12:45:04.000000Z",
    "title": "title50",
    "img": "https:\/\/ejemplo.com\/imagen.jpg"
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


<details>
    
<summary> <h2> Get Animals to Adopt </h2> </summary>
<p> **Get** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/animals-adopt?limit=5&offset=0&protektora_id=123&type=txakurra
```
Header:
```
Content-Type:application/json
```
Response:
```
[
    {
        "id": 1,
        "name": "Fido",
        "etxekoAnimalia": true,
        "type": "txakurra",
        "animalType": "Dog",
        "img": null,
        "bakuna": 1,
        "gender": 1,
        "descripcion": "Friendly dog",
        "year": "2020-05-01 00:00:00",
        "losted": 0,
        "noiztik": "2025-01-01 00:00:00",
        "userID": 2,
        "protektora_id": 123
    },
    {
        "id": 2,
        "name": "Luna",
        "etxekoAnimalia": true,
        "type": "katua",
        "animalType": "Cat",
        "img": null,
        "bakuna": 1,
        "gender": 0,
        "descripcion": "Playful cat",
        "year": "2021-03-15 00:00:00",
        "losted": 0,
        "noiztik": "2025-01-01 00:00:00",
        "userID": 3,
        "protektora_id": 123
    }
]

```
Response Error:
```
{
    "message": "No animals found for the given criteria"
}
```
</details>

<details>
    
<summary> <h2> Get Personal animals </h2> </summary>
<p> **Get** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/animals-personal?limit=5&offset=0&protektora_id=123&type=txakurra
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Response:
```
[
    {
        "id": 1,
        "name": "Fido",
        "etxekoAnimalia": true,
        "type": "txakurra",
        "animalType": "Dog",
        "img": null,
        "bakuna": 1,
        "gender": 1,
        "descripcion": "Friendly dog",
        "year": "2020-05-01 00:00:00",
        "losted": 0,
        "noiztik": "2025-01-01 00:00:00",
        "userID": 2,
        "protektora_id": 123
    },
    {
        "id": 2,
        "name": "Luna",
        "etxekoAnimalia": true,
        "type": "katua",
        "animalType": "Cat",
        "img": null,
        "bakuna": 1,
        "gender": 0,
        "descripcion": "Playful cat",
        "year": "2021-03-15 00:00:00",
        "losted": 0,
        "noiztik": "2025-01-01 00:00:00",
        "userID": 3,
        "protektora_id": 123
    }
]

```
Response Error:
```
{
    "message": "No animals found for the given criteria"
}
```
</details>


<details>
    
<summary> <h2> Create animals </h2> </summary>
<p> **Post** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/animals-create
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```
{
    "id": 1,
    "name": "Fido",
    "etxekoAnimalia": true,
    "type": "txakurra",
    "animalType": "Pastor Alemán",
    "img": "http://url_del_imagen.com/fido.jpg",
    "bakuna": 1,
    "gender": 1,
    "descripcion": "Perro amigable y enérgico",
    "year": "2020-01-01",
    "losted": null,
    "noiztik": null,
    "userID": 5,
    "created_at": "2025-01-08 00:00:00",
    "updated_at": "2025-01-08 00:00:00"
}
```
Response:
```
Código 201: creado correctamente
```
Response Error:
```
{
        "error": "Usuario no autenticado"
}
```
</details>



<details>
    
<summary> <h2> Edit animals </h2> </summary>
<p> **Post** bitartez egin behar da</p>
Link: 
 
```
http://bastbackend.ddns.net:8000/api/animals-edit
```
Header:
```
Content-Type:application/json
Authorization:Bearer 41|FsqTSzQTGSKTy9UB6FhbTi8NjdeYSHE65Nd3hS0505a2bb25
```
Body:
```
{
  "id": 1,
  "name": "Max",
  "etxekoAnimalia": true,
  "type": "txakurra",
  "animalType": "Pastor Alemán",
  "img": "http://urlimagen.com/nueva-imagen.jpg",
  "bakuna": 2,
  "gender": 1,
  "descripcion": "Animal amigable y activo.",
  "year": "2020-05-10"
}

```
Response:
```
{
  "id": 1,
  "name": "Max",
  "etxekoAnimalia": true,
  "type": "txakurra",
  "animalType": "Pastor Alemán",
  "img": "http://urlimagen.com/nueva-imagen.jpg",
  "bakuna": 2,
  "gender": 1,
  "descripcion": "Animal amigable y activo.",
  "year": "2020-05-10",
  "losted": null,
  "noiztik": null,
  "userID": 2,
  "protektora_id": 5
}

```
Response Error:
```
{
  "error": "Animal no encontrado"
}
{
  "error": "Usuario no autenticado"
}
{
  "error": "No tienes permisos para editar este animal"
}
{
  "message": "Datos incorrectos o incompletos.",
  "errors": {
    "name": ["El campo name es obligatorio."],
    "bakuna": ["El campo bakuna debe ser un número entero mayor o igual a 0."]
  }
}

```
</details>
