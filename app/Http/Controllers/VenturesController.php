<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Ventures;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VenturesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        {
           $resource = Ventures::get(['*', 'id as key']);
            $ventures = Ventures::get(['id','code','sstatus', 'title', 'templateslug','slug','mapheight','location','mapwidth','branch','salevel','locationimg', 'layout', 'layoutmap', 'pagetitleseo','banner','largemap', 'metadescription', 'metakeywords', 'published', 'mainbody', 'extrabody', 'bodystyles', 'otherdetails', 'created_at', 'address', 'id as key']);
            return Inertia::render('Ventures/Ventureslist', [
            'ventruesList' => $ventures,
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
            return Inertia::render('Ventures/Venturescreate', [
                'user' => $user,
                'record'=> new Ventures(),
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $locationimg = null;
        $layoutmap = null;
        $banner = null;
        $largemap = null;
        $requestData = $request->all();
        if ($request -> file('locationimg')){
            $locationimg = $request -> file('locationimg')->store('venture', 'public');
            $requestData['locationimg'] = asset('storage/'. $locationimg);
        }
        if ($request -> file('layoutmap')){
            $layoutmap = $request -> file('layoutmap')->store('venture', 'public');
            $requestData['layoutmap'] = asset('storage/'. $layoutmap);
        }
        if ($request -> file('banner')){
            $banner = $request -> file('banner')->store('venture', 'public');
            $requestData['banner'] = asset('storage/'. $banner);
        }
        if ($request -> file('largemap')){
            $largemap = $request -> file('largemap')->store('venture', 'public');
            $requestData['largemap'] = asset('storage/'. $largemap);
        }

        
        $data= Ventures::create($requestData);
        $data->save();
        return to_route('ventures.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Ventures $ventures)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $ventures = Ventures::get(['id','code','sstatus', 'title', 'templateslug','slug','mapheight','location','mapwidth','branch','salevel','locationimg', 'layout', 'layoutmap', 'pagetitleseo','banner','largemap', 'metadescription', 'metakeywords', 'published', 'mainbody', 'extrabody', 'bodystyles', 'otherdetails', 'created_at', 'address', 'id as key']);
        $record = Ventures::find($id);
        if($record->locationimg != null){
            $record ->locationimgPath = asset('storage/' . $record -> locationimg);
        }
        if($record->layoutmap != null){
            $record ->layoutmapPath = asset('storage/' . $record -> layoutmap);
        }
        if($record->banner != null){
            $record ->bannerPath = asset('storage/' . $record -> banner);
        }
        if($record->largemap != null){
            $record ->largemapPath = asset('storage/' . $record -> largemap);
        }
        return Inertia::render('Ventures/Venturescreate', [
            'record' => $record,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $venture = Ventures::find($id);
        $locationimg= null;
        $layoutmap = null;
        $banner = null;
        $largemap = null;
        $requestData = $request->all();
        if($request->file('locationimg')){
            Storage::delete('public' . $ventur->locationimg);
            $locationimg = $request->file('locationimg')->store('company', 'public');
            $requestData['locationimg'] = $locationimg;
        }
        if($request->file('layoutmap')){
            Storage::delete('public' . $ventur->layoutmap);
            $layoutmap = $request->file('layoutmap')->store('company', 'public');
            $requestData['layoutmap'] = $layoutmap;
        }
        if($request->file('banner')){
            Storage::delete('public' . $ventur->banner);
            $banner = $request->file('banner')->store('company', 'public');
            $requestData['banner'] = $banner;
        }
        if($request->file('largemap')){
            Storage::delete('public' . $ventur->largemap);
            $largemap = $request->file('largemap')->store('company', 'public');
            $requestData['largemap'] = $largemap;
        }
        $updated=$venture->update($requestData);
        return to_route('ventures.index');
    }

    //delete page assets
    public function deleteasset($id, $asset)
    {
        $venture = Ventures::find($id);

        switch($asset){
            case('locationimg'):
                Storage::delete('public' . $venture->locationimg);
                $venture->update(['locationimg'=>null]);
                break;
            case('layoutmap'):
                Storage::delete('public' . $venture->layoutmap);
                $venture->update(['layoutmap'=>null]);
                break;
            case('banner'):
                Storage::delete('public' . $venture->banner);
                $venture->update(['banner'=>null]);
                break;
            case('largemap'):
                Storage::delete('public' . $venture->largemap);
                $venture->update(['largemap'=>null]);
                break;
            default:

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Ventures::find($id)->delete();
        return to_route('ventures.index');
    }
}
