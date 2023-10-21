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
        $resource = Monthlyincentive::get(['*', 'id AS key']);
        return Inertia::render('Expenses/MonthIncentives/MonthlyIncentList', [
            'resource' => $resource,
        ]);
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

    //     [
        //     "id"=> $request->code,
        //     "incentivetype"=> $request->incentivetype,
        //     "duration"=> $request->duration,
        //     "agent"=> $request->agent,
        //     "account"=> $request->account,
        //     "business"=> $request->business,
        //     "company"=> $request->company,
        //     "paidon"=> $request->paidon,
        //     "amount"=> $request->amount,
        //     "tds"=> $request->tds,
        //     "gst"=> $request->gst,
        //     "chequeno"=> $request->chequeno,
        //     "ddnum"=> $request->ddnum,
        //     "drawnon"=> $request->drawnon,
        //     "transactionid"=> $request->transactionid,
        //     "description"=> $request->description,
        // ]

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $requestData = $request->all();
        $data= Monthlyincentive::create($requestData);
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
    public function edit(Monthlyincentive $monthlyincentive, $id)
    {
        $user = Auth::user();
        $monthlyincentives = Monthlyincentive::get(['id','incentivetype', 'durationfrom', 'durationto', 'agent','account', 'business', 'paidon', 'amount', 'tds', 'gst', 'chequeno', 'ddnum', 'drawnon', 'transactionid', 'description']);
        $monthlyincentive= Monthlyincentive::find($id);
        return Inertia::render('Expenses/MonthIncentives/CreateIncentive', [
            'user' => $user,
            'montylyIncentiveList' => $monthlyincentives,
            'record' => $monthlyincentive,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Monthlyincentive $monthlyincentive, $id)
    {
        $data= Monthlyincentive::where('id','=',$id)->update([
            "code"=> $request->code,
            "incentivetype"=> $request->incentivetype,
            "durationfrom"=> $request->durationfrom,
            "durationto"=> $request->durationto,
            "agent"=> $request->agent,
            "account"=> $request->account,
            "business"=> $request->business,
            "paidon"=> $request->paidon,
            "amount"=> $request->amount,
            "tds"=> $request->tds,
            "gst"=> $request->gst,
            "chequeno"=> $request->chequeno,
            "ddnum"=> $request->ddnum,
            "drawnon"=> $request->drawnon,
            "transactionid"=> $request->transactionid,
            "description"=> $request->description,
        ]);
        return to_route('monthlyincentive.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Monthlyincentive $monthlyincentive, $id)
    {
        Monthlyincentive::find($id)->delete();
        return to_route('monthlyincentive.index');
    }
}
