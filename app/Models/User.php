<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $iduser
 * @property string $name
 * @property string $username
 * @property string $fonction
 * @property string $roles
 * @property string $email
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property Carbon|null $updated_at
 * @property Carbon|null $created_at
 * 
 * @property Collection|Favoriplace[] $favoriplaces
 * @property Collection|Favoriuser[] $favoriusers
 * @property Collection|Reservation[] $reservations
 *
 * @package App\Models
 */
class User extends Model implements Authenticatable
{

	use HasFactory, Notifiable;

	protected $table = 'users';
	protected $primaryKey = 'iduser';
	protected $guarded = ['iduser'];

	protected $casts = [
		'is_admin' => 'bool'
	];

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
		'roles',
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

    public function hasRole($role)
	{
		return $this->roles === $role;
	}
}

