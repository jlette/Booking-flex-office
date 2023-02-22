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
 * @property Utilisateur $utilisateur
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

	public function utilisateur()
	{
		return $this->belongsTo(Utilisateur::class, 'id_user');
	}
}
