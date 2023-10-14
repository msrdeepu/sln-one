<?php

namespace App\Http\Controllers;

use App\Models\Cashadvance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class CashadvanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Cashadvance::get(['*', 'id as key']);
        $cashadvanceList = Cashadvance::get(['id', 'agent', 'branch', 'account', 'paymentmethod', 'amount', 'cheque', 'drawn', 'details', 'created_at']);
        return Inertia::render('Expenses/CashAdvance/CashAdvList', [
            'cashadvanceList'=>$cashadvanceList,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Expenses/CashAdvance/CreateCashAdvance', [
            'user' => $user,
            'record' => new Cashadvance(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = Cashadvance::create([
            "agent"=> $request->agent,
            "branch"=> $request->branch,
            "account"=> $request->account,
            "paymentmethod"=> $request->paymentmethod,
            "amount"=> $request->amount,
            "cheque"=> $request->cheque,
            "drawn"=> $request->drawn,
            "details"=> $request->details,
        ]);
        $data->save();
        return to_route('cashadvance.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cashadvance $cashadvance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = Auth::user();
        $cashadvances = Cashadvance::get(['id', 'agent', 'branch', 'account', 'paymentmethod', 'amount', 'cheque', 'drawn', 'details', 'created_at']);
        $cashadvance = Cashadvance::find($id);
        return Inertia::render('Expenses/CashAdvance/CreateCashAdvance', [
            'user' => $user,
            'cashadvanceList' => $cashadvances,
            'record' => $cashadvance,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cashadvance $cashadvance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cashadvance $cashadvance)
    {
        //
    }
}
