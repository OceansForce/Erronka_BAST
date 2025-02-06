<?php

// app/Models/Protektora.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protektora extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'protektora';

    protected $fillable = [
        'name',
        'provintzia',
        'hiria',
        'telefono',
        'email',
        'logo'
    ];
    // Relación con los usuarios
    public function users()
    {
        return $this->hasMany(User::class, 'idProtektora');
    }

    // Relación con las noticias (si una protektora tiene muchas noticias)
    public function news()
    {
        return $this->hasMany(News::class);
    }
}
