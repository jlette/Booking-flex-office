<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        
        $adminRole = Role::where('role_name', 'admin')->first();

        if (!$adminRole) {
            // Si le rôle "admin" n'existe pas encore dans la base de données,
            // tu peux le créer ici avant de créer l'utilisateur admin
            $adminRole = Role::create([
                'role_name' => 'admin',
            ]);
        }

        $adminUser = User::where('email', 'admin@admin.com')->first();

        if (!$adminUser) {
            $adminUser = User::create([
                'name' => 'Admin',
                'username' => 'Admin',
                'email' => 'admin@admin.com',
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
                'roleid' => $adminRole->role_id,
                'updated_at' => now(),
                'created_at' => now(),
            ]);
        }
    }
}
