<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('productos')->insert([
            [
                'idmarca'=>'1',
                'nombre'=>'laptop',
                'precio'=>'100$',
                'created_at'=>now(),
                'updated_at'=>now()
            ],
            [
                'idmarca'=>'1',
                'nombre'=>'laptop gamer',
                'precio'=>'200$',
                'created_at'=>now(),
                'updated_at'=>now()
            ],
            [
                'idmarca'=>'2',
                'nombre'=>'laptop',
                'precio'=>'100$',
                'created_at'=>now(),
                'updated_at'=>now()
            ],
            [
                'idmarca'=>'2',
                'nombre'=>'laptop gamer',
                'precio'=>'200$',
                'created_at'=>now(),
                'updated_at'=>now()
            ]
        ]);
    }
}
