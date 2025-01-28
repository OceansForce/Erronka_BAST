<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Animals extends Model
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


    // Relación con las traducciones del texto
    public function descripcionTranslations()
    {
        return $this->hasMany(Translation::class, 'keyValue', 'descripcion');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userID'); // Aquí le indicas el nombre correcto de la columna
    }


    public function galduta()
    {
        return $this->belongsTo(Galduta::class, 'losted'); // Aquí le indicas el nombre correcto de la columna
    }

}
