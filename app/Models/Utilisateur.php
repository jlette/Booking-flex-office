<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Utilisateur
 * 
 * @property int $iduser
 * @property string $nom
 * @property string $prenom
 * @property string $fonction
 * @property string $mail
 * @property string $password
 * 
 * @property Collection|Favoriplace[] $favoriplaces
 * @property Collection|Favoriuser[] $favoriusers
 * @property Collection|Reservation[] $reservations
 *
 * @package App\Models
 */
class Utilisateur extends Model
{
	protected $table = 'utilisateur';
	protected $primaryKey = 'iduser';
	public $timestamps = false;

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'nom',
		'prenom',
		'fonction',
		'mail',
		'password'
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
}
