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
 * @property int $idfavuser
 * @property int $idfavp
 * 
 * @property Favoriplace $favoriplace
 * @property Favoriuser $favoriuser
 * @property Collection|Reservation[] $reservations
 *
 * @package App\Models
 */
class Utilisateur extends Model
{
	protected $table = 'utilisateur';
	protected $primaryKey = 'iduser';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'iduser' => 'int',
		'idfavuser' => 'int',
		'idfavp' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'nom',
		'prenom',
		'fonction',
		'mail',
		'password',
		'idfavuser',
		'idfavp'
	];

	public function favoriplace()
	{
		return $this->belongsTo(Favoriplace::class, 'idfavp');
	}

	public function favoriuser()
	{
		return $this->belongsTo(Favoriuser::class, 'idfavuser');
	}

	public function reservations()
	{
		return $this->hasMany(Reservation::class, 'iduser');
	}
}
