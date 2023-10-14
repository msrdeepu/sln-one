<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Setting;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */

    public function index()
    {

        //$resource = Category::get(['*', 'id AS key']);
        $resource = Category::get(['id','cname','layout','slug','parent','dorder','status','seotitle','id AS key']);

        return Inertia::render('Cms/Categories/Categorylist', [

            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {


        $slayout = Setting::where('type', '=', 'LAYOUT')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sstatus = Setting::where('type', '=', 'STATUS')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);

        $sparent = Category::get(['id AS value', 'cname AS label', 'id AS key']);
        // $setting = new Setting();
        // $record = new Category();

        // dd($sparent);

        return Inertia::render('Cms/Categories/Categoryview', [
            'slayout' => $slayout,
            'sstatus' => $sstatus,
            'sparent' => $sparent,
            'record' => new Category(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);
        $image = null;
        $thumb = null;
        $banner = null;
        if ($request->file('image')) {
            $image = $request->file('image')->store('category', 'public');
        }

        if ($request->file('thumb')) {
            $thumb = $request->file('thumb')->store('category', 'public');
        }

        if ($request->file('banner')) {
            $banner = $request->file('banner')->store('category', 'public');
        }

        if ($request->has('cname')){
            $slug = Str::slug($request->input('cname'), "-");
        }


        $data = Category::create([
            "cname" => $request->cname,
            "slug" => $slug,
            "seotitle" => $request->seotitle,
            "description" => $request->description,
            "keywords" => $request->keywords,
            "status" => $request->status,
            "parent" => $request->parent,
            "layout" => $request->layout,
            "dorder" => $request->dorder,
            "body" => $request->body,
            "image" => $image,
            "banner" => $banner,
            "thumb" => $thumb,

        ]);
        $data->save();
        return to_route('category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $slayout = Setting::where('type', '=', 'LAYOUT')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sstatus = Setting::where('type', '=', 'STATUS')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);

        $sparent = Category::get(['id AS value', 'cname AS label', 'id AS key']);
        // $setting = new Setting();
        // $record = new Category();
        $record = Category::find($id);
         //adding image path
         if($record->thumb != null){
            $record->thumbPath = asset('storage/'.$record->thumb);
         }
         if($record->image != null){
            $record->imagePath = asset('storage/'.$record->image);
         }

         if($record->banner != null){
            $record->bannerPath = asset('storage/'.$record->banner);
         }




        return Inertia::render('Cms/Categories/Categoryview', [
            'slayout' => $slayout,
            'sstatus' => $sstatus,
            'sparent' => $sparent,
            'record' => $record
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {


        $image = null;
        $thumb = null;
        $banner = null;
       // $updatedata=$request->all();
       $requestData = $request->all();



       if ($request->has('cname')){
        $requestData['slug'] = Str::slug($request->input('cname'), "-");
    }

        $category = Category::find($id);
        //update logic
        if ($request->file('image')) {
            Storage::delete('public' . $category->image);
            $image = $request->file('image')->store('category', 'public');
            $requestData['image'] = $image;

        }

        if ($request->file('thumb')) {
            Storage::delete('public' . $category->thumb);
            $thumb = $request->file('thumb')->store('category', 'public');
            $requestData['thumb'] = $thumb;
        }


        if ($request->file('banner')) {
            Storage::delete('public' . $category->banner);
            $banner = $request->file('banner')->store('category', 'public');
            $requestData['banner'] = $banner;
        }






        $data = category::where('id', '=', $id)->update($requestData);

        return to_route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        //update logic
        if ($category->image !="") {
            Storage::delete('public' . $category->image);
        }

        if ($category->thumb !="") {
            Storage::delete('public' . $category->thumb);
        }


        if ($category->banner !="") {
            Storage::delete('public' . $category->banner);
        }

        $category->delete();
        return to_route('category.index');
    }
}
