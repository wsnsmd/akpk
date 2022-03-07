<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Account;
use App\Models\Contact;
use App\Models\Organization;
use App\Models\Admin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Admin::factory()->create([
            'name' => 'Wawan Setiawan',
            'username' => 'wsnsmd',
        ]);
    }
}
