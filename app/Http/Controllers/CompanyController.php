<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Company::get(['*', 'id as key']);
        $companies = Company::get(['id', 'companyname', 'domain', 'gstax', 'pan', 'upiId', 'email', 'phonenum', 'mobilenum', 'websiteslug', 'logo', 'qrcode', 'astatus', 'address', 'bankdetails', 'terms', 'note', 'footer', 'created_at']);
        return Inertia::render('Company/List', [
            'companyList' => $companies,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        {
            $user = Auth::user();
            return Inertia::render('Company/Createcompany', [
                'user' => $user,
                'record'=> new Company(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $logo= null;
        $qrcode=null;
        $requestData = $request->all();
        if ($request->file('logo')){
            $logo = $request->file('logo')->store('company', 'public' );            
            $requestData['logo'] = asset('storage/'.$logo);
        }
        if ($request->file('qrcode')){
            $qrcode = $request->file('qrcode')->store('company', 'public');
            $requestData['qrcode'] = asset('storage/'.$qrcode);
        }

        $data= Company::create($requestData);
        $data->save();
        return to_route('company.index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
       //$companies = Company::get(['id', 'companyname', 'domain', 'gstax', 'pan', 'upiId', 'email', 'phonenum', 'mobilenum', 'websiteslug', 'logo', 'qrcode', 'astatus', 'address', 'bankdetails', 'terms', 'note', 'footer', 'created_at']);
       $record = Company::find($id);
       if($record->logo != null){
        $record->logoPath = asset('storage/'.$record->logo);
     }

     if($record->qrcode != null){
        $record->qrcodePath = asset('storage/'.$record->qrcode);
     }
       return Inertia::render('Company/Createcompany', [
        'record' => $record,
       ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        $logo= null;
        $qrcode=null;
        $requestData = $request->all();
        if ($request->file('logo')){
            Storage::delete('public' . $company->logo);
            $logo = $request->file('logo')->store('company', 'public');
            $requestData['logo'] = $logo;
        }

        if ($request->file('qrcode')){
            Storage::delete('public' . $company->qrcode);
            $qrcode = $request->file('qrcode')->store('company', 'public');
            $requestData['qrcode'] = $qrcode;
        }

        //dd($requestData);
        //$data=$company->update($requestData);
        $updated=$company->update($requestData);

        return to_route('company.index');
    }

     // delete page assets
     public function deleteasset($id, $asset)
     {
         $company = Company::find($id);
 
         switch($asset) {
             case('logo'):
                 Storage::delete('public' . $company->logo);
                 $company->update(["logo"=> null]);
                 break;
 
             case('qrcode'):
                 Storage::delete('public' . $company->qrcode);
                 $company->update(["qrcode"=> null]);
                 break;
 
             default:
 
         }
    }
 

   

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $company = Company::find($id);
        if ($company->logo !="") {
            Storage::delete('public' . $company->logo);
        }
        if ($company->qrcode !="") {
            Storage::delete('public' . $company->qrcode);
        }
        $company->delete();
        return to_route('company.index');
    }
}
