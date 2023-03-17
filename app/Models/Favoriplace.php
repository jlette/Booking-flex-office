<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Favoriplace
 * 
 * @property int $idfavp
 * @property int $id_user
 * @property int $id_place
 * 
 * @property Place $place
 * @property User $user
 *
 * @package App\Models
 */
class Favoriplace extends Model
{
	protected $table = 'favoriplace';
	protected $primaryKey = 'idfavp';
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int',
		'id_place' => 'int'
	];

	protected $fillable = [
		'id_user',
		'id_place'
	];

	public function place()
	{
		return $this->belongsTo(Place::class, 'id_place');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
