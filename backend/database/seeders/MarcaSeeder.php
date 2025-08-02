<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illiminate\Support\Facades\DB;

class MarcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('marcas')->insert([
            [
                'nombre' => 'intel',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'nombre' => 'ryzen',
                'created_at' => now(),
                'updated_at' => now()
            ]
            ]);
    }
}
