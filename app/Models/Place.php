<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Place
 * 
 * @property int $idplace
 * @property int $numplace
 * @property Carbon $date_place
 * @property int $horaire_matin
 * @property int $horaire_apresmidi
 * @property int|null $numetage
 * @property int|null $isReserved
 * 
 * @property Collection|Favoriplace[] $favoriplaces
 * @property Collection|Reservation[] $reservations
 *
 * @package App\Models
 */
class Place extends Model
{
	protected $table = 'place';
	protected $primaryKey = 'idplace';
	public $timestamps = false;

	protected $casts = [
		'numplace' => 'int',
		'horaire_matin' => 'int',
		'horaire_apresmidi' => 'int',
		'numetage' => 'int',
		'isReserved' => 'int'
	];

	protected $dates = [
		'date'
	];


	protected $fillable = [
		'numplace',
		'date_place',
		'horaire_matin',
		'horaire_apresmidi',
		'numetage',
		'isReserved'
	];

	public function favoriplaces()
	{
		return $this->hasMany(Favoriplace::class, 'id_place');
	}

	public function reservations()
	{
		return $this->hasMany(Reservation::class, 'id_place');
	}
}
