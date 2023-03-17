<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Favoriuser
 * 
 * @property int $idfavuser
 * @property int $id_user
 * @property int $id_favori
 * 
 * @property User $user
 *
 * @package App\Models
 */
class Favoriuser extends Model
{
	protected $table = 'favoriuser';
	protected $primaryKey = 'idfavuser';
	public $timestamps = false;

	protected $casts = [
		'id_user' => 'int',
		'id_favori' => 'int'
	];

	protected $fillable = [
		'id_user',
		'id_favori'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
