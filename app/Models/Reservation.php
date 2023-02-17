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
 * @property int $idplace
 * @property int $iduser
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
		'idplace' => 'int',
		'iduser' => 'int'
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
		'idplace',
		'iduser'
	];

	public function place()
	{
		return $this->belongsTo(Place::class, 'idplace');
	}

	public function utilisateur()
	{
		return $this->belongsTo(Utilisateur::class, 'iduser');
	}
}
