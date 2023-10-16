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
        $customers = Customer::get(['id','user_id', 'branch_id', 'code','type','fullname', 'surname', 'website', 'organization', 'careof_relationship', 'careof','aadhar', 'pan', 'taxid', 'age', 'dob', 'nationality', 'occupation', 'address', 'district', 'state', 'country', 'pincode', 'email', 'mobile', 'phone', 'altmobile', 'whatsapp', 'nominee', 'nominee_address', 'nominee_relationship', 'nominee_age', 'nominee_dob', 'joined_on', 'enabled', 'login', 'deleted_at', 'created_at', 'updated_at']);
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
        $requestData = $request->all();
        if ($request->file('photo')) {
            $photo = $request->file('photo')->store('content', 'public');
            $requestData['photo'] = $photo;
        }
        $data = Customer::create($requestData);
        $data->save();
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
    public function edit(Customer $customer)
    {
        return Inertia::render('Customer/Createcustomer');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
