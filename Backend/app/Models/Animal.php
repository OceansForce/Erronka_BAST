<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    // Nombre de la tabla (opcional si sigue la convención pluralizada)
    protected $table = 'animals';

    // Llave primaria de la tabla
    protected $primaryKey = 'id';

    // Si no usas `created_at` y `updated_at`
    public $timestamps = false;

    // Campos asignables en operaciones de asignación masiva
    protected $fillable = [
        'name',
        'etxekoAnimalia',
        'type',
        'animalType',
        'img',
        'bakuna',
        'gender',
        'descripcion',
        'year',
        'losted',
        'noiztik',
        'userID',
    ];

    // Si necesitas castings específicos
    protected $casts = [
        'etxekoAnimalia' => 'boolean',
        'gender' => 'boolean',
        'year' => 'datetime',
        'noiztik' => 'datetime',
    ];
}
