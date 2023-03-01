<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class User extends Model implements Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'iduser';
    protected $guarded = ['iduser'];

    protected $dates = [
        'email_verified_at'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

    protected $fillable = [
        'name',
        'username',
        'fonction',
        'email',
        'email_verified_at',
        'password',
        'remember_token'
    ];

    public function favoriplaces()
    {
        return $this->hasMany(Favoriplace::class, 'id_user');
    }

    public function favoriusers()
    {
        return $this->hasMany(Favoriuser::class, 'id_user');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'id_user');
    }

    public function getAuthIdentifierName()
    {
        return 'iduser';
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }

    public function getRememberToken()
    {
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }
}
