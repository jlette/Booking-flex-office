<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Favoriplace
 * 
 * @property int $idfavp
 * 
 * @property Collection|Place[] $places
 * @property Collection|Utilisateur[] $utilisateurs
 *
 * @package App\Models
 */
class Favoriplace extends Model
{
	protected $table = 'favoriplace';
	protected $primaryKey = 'idfavp';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idfavp' => 'int'
	];

	public function places()
	{
		return $this->hasMany(Place::class, 'idfavp');
	}

	public function utilisateurs()
	{
		return $this->hasMany(Utilisateur::class, 'idfavp');
	}
}
