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
 * @property int|null $numetage
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
		'numetage' => 'int'
	];

	protected $fillable = [
		'numplace',
		'numetage'
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
