<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Reservation
 * 
 * @property int $idreservation
 * @property bool $matin
 * @property bool $apresMidi
 * @property Carbon $date
 * @property int $id_user
 * @property int $id_place
 * 
 * @property Place $place
 * @property User $user
 *
 * @package App\Models
 */
class Reservation extends Model
{
	protected $table = 'reservation';
	protected $primaryKey = 'idreservation';
	public $timestamps = false;

	protected $casts = [
		'matin' => 'bool',
		'apresMidi' => 'bool',
		'id_user' => 'int',
		'id_place' => 'int'
	];

	protected $dates = [
		'date'
	];

	protected $fillable = [
		'matin',
		'apresMidi',
		'date',
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
