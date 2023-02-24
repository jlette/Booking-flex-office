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
 * @property Carbon $heuredebut
 * @property Carbon $heurefin
 * @property Carbon $date
 * @property int $id_user
 * @property int $id_place
 * 
 * @property Place $place
 * @property Utilisateur $utilisateur
 *
 * @package App\Models
 */
class Reservation extends Model
{
	protected $table = 'reservation';
	protected $primaryKey = 'idreservation';
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int',
		'id_place' => 'int'
	];

	protected $dates = [
		'heuredebut',
		'heurefin',
		'date'
	];

	protected $fillable = [
		'heuredebut',
		'heurefin',
		'date',
		'id_user',
		'id_place'
	];

	public function place()
	{
		return $this->belongsTo(Place::class, 'id_place');
	}

	public function utilisateur()
	{
		return $this->belongsTo(Utilisateur::class, 'id_user');
	}
}