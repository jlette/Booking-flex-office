<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Place
 * 
 * @property int $idplace
 * @property int $numplace
 * @property int $localisation
 * @property int $idfavp
 * 
 * @property Favoriplace $favoriplace
 * @property Collection|Reservation[] $reservations
 *
 * @package App\Models
 */
class Place extends Model
{
	protected $table = 'place';
	protected $primaryKey = 'idplace';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'idplace' => 'int',
		'numplace' => 'int',
		'localisation' => 'int',
		'idfavp' => 'int'
	];

	protected $fillable = [
		'numplace',
		'localisation',
		'idfavp'
	];

	public function favoriplace()
	{
		return $this->belongsTo(Favoriplace::class, 'idfavp');
	}

	public function reservations()
	{
		return $this->hasMany(Reservation::class, 'idplace');
	}
}
