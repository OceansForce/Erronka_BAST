<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Losted extends Model
{
    use HasFactory;

    // Nombre de la tabla (opcional si sigue la convención pluralizada)
    protected $table = 'losted';

    // Llave primaria de la tabla
    protected $primaryKey = 'id';

    // Si no usas `created_at` y `updated_at`
    public $timestamps = false;

    // Campos asignables en operaciones de asignación masiva
    protected $fillable = [
        'id',
        'hiria',
        'probintzia',
        'fecha',
        'descripcion',
        'moreInformation',
    ];

   

}
