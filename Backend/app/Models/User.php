<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Notifications\Notifiable; // Importar el trait correctamente
use Laravel\Sanctum\HasApiTokens;

class User extends Model
{
    use HasFactory;

    use HasApiTokens, Notifiable;

    // Especificar la tabla que se usará (si es diferente a la predeterminada 'users')
    protected $table = 'users';

    // Definir la clave primaria (ya que 'id' es la clave primaria y es autoincremental)
    protected $primaryKey = 'id';


    public $timestamps = false;

    // Si la clave primaria es autoincremental, no necesitas indicar 'incrementing' a menos que lo desees explícitamente
    public $incrementing = true;

    // Definir los campos que se pueden llenar de manera masiva
    protected $fillable = [
        'DNI',
        'name',
        'secondName',
        'email',
        'password',
        'year',
        'img',
        'idProtektora',  // La relación con protektora
    ];

    // Para ocultar los campos como la contraseña en las respuestas JSON
    protected $hidden = [
        'password', // No mostrar la contraseña en las respuestas JSON
        'img',      // Si no deseas exponer la imagen directamente
    ];

    // Para convertir 'year' a un tipo de datos 'datetime'
    protected $casts = [
        'year' => 'datetime',
    ];

    // Relación con la tabla 'Protektora' (suponiendo que tienes el modelo de Protektora)
    public function protektora()
    {
        return $this->belongsTo(Protektora::class, 'idProtektora');
    }
}
