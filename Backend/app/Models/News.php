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
}

