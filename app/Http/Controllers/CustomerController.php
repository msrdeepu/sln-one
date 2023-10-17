<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Customer::get(['*', 'id as key']);
        $customers = Customer::get(['id', 'code', 'phone', 'phone', 'mobile', 'active', 'created_at']);
        return Inertia::render('Customer/Customerlist', [
            'customerList' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        return Inertia::render('Customer/Createcustomer', [
            'user' => $user,
            'record'=> new Customer()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $photo = null;
        $requestData = $request->all();
        if ($request->file('photo')) {
            $photo = $request->file('photo')->store('nominee', 'public');
            $requestData['photo'] = $photo;
        }
        $data = Customer::create($requestData);
        $data -> save();
        return to_route('customer.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer, $id)
    {
        $record = Customer::find($id);
        if($record->photo != null){
            $record->photoPath = asset('storage/'.$record->photo);
         }
        return Inertia::render('Customer/Createcustomer', [
            'record' => $record,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer, $id)
    {
        $photo = null;
        $requestData = $request->all();
        if ($request->file('photo')) {
            Storage::delete('public' . $page->photo);
            $photo = $request->file('photo')->store('nominee', 'public');
            $requestData['photo'] = $photo;
        }
        $updated=$customer->update($requestData);
        return to_route('customer.index');
    }


    // delete page assets
    public function deleteasset($id, $asset)
    {
        $page = Customer::find($id);

        switch($asset) {
            case('photo'):
                Storage::delete('public' . $customer->photo);
                $customer->update(["photo"=> null]);
                break;
            default:

        }
    }
//dd($asset);

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
