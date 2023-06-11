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
 * @property bool $h1
 * @property bool $h2
 * @property bool $h3
 * @property bool $h4
 * @property bool $matin
 * @property bool $apresmidi
 * @property bool $journee
 * @property Carbon $date
 * @property Carbon $cree_le
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
		'h1' => 'bool',
		'h2' => 'bool',
		'h3' => 'bool',
		'h4' => 'bool',
		'matin' => 'bool',
		'apresmidi' => 'bool',
		'journee' => 'bool',
		'date' => 'datetime',
		'cree_le' => 'datetime',
		'id_user' => 'int',
		'id_place' => 'int'
	];

	protected $fillable = [
		'h1',
		'h2',
		'h3',
		'h4',
		'matin',
		'apresmidi',
		'journee',
		'date',
		'cree_le',
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
