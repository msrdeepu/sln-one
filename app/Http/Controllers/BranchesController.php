<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class BranchesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Branches::get(['*', 'id as key']);
        $branches = Branches::get(['id','code', 'company', 'location','email','created_at', 'phonenumber', 'mobilenumber', 'status', 'address', 'id AS key']);
        
        return Inertia::render('Branches/Branchlist', [
            'branchesList' => $branches,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $user = Auth::user();
            return Inertia::render('Branches/Createbranch', [
            'user' => $user,
            'record'=> new Branches(),
            ]);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       // dd($request);
        $data= Branches::create([
            "code"=> $request->code,
            "company"=> $request->company,
            "status"=> $request->status,
            "location"=> $request->location,
            "email"=> $request->email,
            "phonenumber"=> $request->phonenumber,
            "mobilenumber"=> $request->mobilenumber,
            "address"=> $request->address,
        ]);
        $data->save();
        return to_route('branches.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Branches $branches)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = Auth::user();
        $branches = Branches::get(['id','code', 'company', 'location','email', 'phonenumber', 'mobilenumber', 'status', 'address', 'id AS key']);
        $branch= Branches::find($id);
        return Inertia::render('Branches/Createbranch', [
            'user' => $user,
            'branchesList' => $branches,
            'record' => $branch,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data= Branches::where('id','=',$id)->update([
            "code"=> $request->code,
            "company"=> $request->company,
            "status"=> $request->status,
            "location"=> $request->location,
            "email"=> $request->email,
            "phonenumber"=> $request->phonenumber,
            "mobilenumber"=> $request->mobilenumber,
            "address"=> $request->address,
    
        ]);
        return to_route('branches.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Branches::find($id)->delete();
        return to_route('branches.index');
    }
}
