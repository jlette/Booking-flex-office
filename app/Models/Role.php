<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Role
 * 
 * @property int $role_id
 * @property string $role_name
 * 
 * @property Collection|User[] $users
 *
 * @package App\Models
 */
class Role extends Model
{
	protected $table = 'roles';
	protected $primaryKey = 'role_id';
	public $timestamps = false;

	protected $fillable = [
		'role_name'
	];

	public function users()
	{
		return $this->hasMany(User::class, 'roleid');
	}
}
