<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        {
            $resource = Property::get(['*', 'id as key']);
            return Inertia::render('Properties/Propertylist', [
            'resource' => $resource,
        ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $user = Auth::user();
            $resource = Property::get(['*', 'id as key']);
            return Inertia::render('Properties/CreateProperty', [
                'user' => $user,
                'record'=> new Property(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         dd($request);
        $data= Company::create([
          
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
