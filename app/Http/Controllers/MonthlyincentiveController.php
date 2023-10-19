<?php

namespace App\Http\Controllers;

use App\Models\Monthlyincentive;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class MonthlyincentiveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Expenses/MonthIncentives/MonthlyIncentList');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Expenses/MonthIncentives/CreateIncentive', [
            'user' => $user,
            'record'=> new Monthlyincentive(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data= Monthlyincentive::create([
            "id"=> $request->code,
            "incentivetype"=> $request->incentivetype,
            // "duration"=> $request->duration,
            "agent"=> $request->agent,
            "account"=> $request->account,
            "business"=> $request->business,
            "company"=> $request->company,
            // "paidon"=> $request->paidon,
            "amount"=> $request->amount,
            "tds"=> $request->tds,
            "gst"=> $request->gst,
            "chequeno"=> $request->chequeno,
            "ddnum"=> $request->ddnum,
            "drawnon"=> $request->drawnon,
            "transactionid"=> $request->transactionid,
            "description"=> $request->description,
        ]);
        $data->save();
        return to_route('monthlyincentive.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Monthlyincentive $monthlyincentive)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Monthlyincentive $monthlyincentive)
    {
        return Inertia::render('Expenses/MonthIncentives/CreateIncentive');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Monthlyincentive $monthlyincentive)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Monthlyincentive $monthlyincentive)
    {
        //
    }
}
