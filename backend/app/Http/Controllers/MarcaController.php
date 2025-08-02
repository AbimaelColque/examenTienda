<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Marca;

class MarcaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Marca::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre'=>'required'
        ]);
        $marca = Marca::create($request->all());
        return response()->json([
            'mensaje'=>'marca creada exitosamente',
            'marca' => $marca
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $marca = Marca::find($id);
        if(!$marca){
            return response()->json(
            [
                'mensaje' => 'marca no encontrada'
            ],404);
        }
        return response()->json([
            'mensaje' => 'marca encontrada exitosamente',
            'marca' => $marca
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nombre'=>'required'
        ]);

        $marca = Marca::find($id);
        if(!$marca){
            return response()->json(
            [
                'mensaje'=>'marca no encontrada'
            ],404);
        }

        $marca->update($request->all());

        return response()->json([
            'mensaje' => 'marca actualizada exitosamente',
            'marca' => $marca
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
    }
}
