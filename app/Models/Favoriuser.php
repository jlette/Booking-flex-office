<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Favoriuser
 * 
 * @property int $idfavuser
 * 
 * @property Collection|Utilisateur[] $utilisateurs
 *
 * @package App\Models
 */
class Favoriuser extends Model
{
	protected $table = 'favoriuser';
	protected $primaryKey = 'idfavuser';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idfavuser' => 'int'
	];

	public function utilisateurs()
	{
		return $this->hasMany(Utilisateur::class, 'idfavuser');
	}
}
