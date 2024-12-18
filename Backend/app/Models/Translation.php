<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    // Especificar la tabla si no sigue la convención plural
    protected $table = 'translations';  // Asegúrate de que coincida con el nombre de tu tabla

    // Si los nombres de las columnas no son convencionales, puedes definirlos aquí
    protected $fillable = ['keyValue', 'language', 'value'];

    // O si las columnas son de tipo timestamp, desactivar la gestión de timestamps si no la usas
    public $timestamps = false; // Esto si tu tabla no tiene los campos created_at/updated_at
}
