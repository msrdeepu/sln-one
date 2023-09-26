<?php

namespace App\Http\Controllers;

use App\Models\Branches;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
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
    public function edit($code)
    {
        $user = Auth::user();
        $branches = Branches::get(['id','code', 'company', 'location','email', 'phonenumber', 'mobilenumber', 'status', 'address', 'id AS key']);
        $branh= Branches::find($code);
        return Inertia::render('Branches/Createbranch', [
            'user' => $user,
            'record' => $branches,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $code)
    {
        $data= Branches::where('code','=',$code)->update([
            "code"=> $request->code,
            "company"=> $request->company,
            "status"=> $request->status,
            "location"=> $request->location,
            "email"=> $request->email,
            "phonenumber"=> $request->phonenumber,
            "mobilenumber"=> $request->mobilenumber,
            "address"=> $request->address,
    
        ]);
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
