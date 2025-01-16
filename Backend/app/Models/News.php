<?php

// app/Models/News.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['text', 'protektora', 'created_at', 'updated_at', 'img']; // protektora_id como referencia

    // Relación con Protektora
    public function protektora()
    {
        return $this->belongsTo(Protektora::class, 'protektora');
    }


    // Relación con las traducciones del texto
    public function textTranslations()
    {
        return $this->hasMany(Translation::class, 'keyValue', 'text');
    }

    // Relación con las traducciones del título
    public function titleTranslations()
    {
        return $this->hasMany(Translation::class, 'keyValue', 'title');
    }
}

