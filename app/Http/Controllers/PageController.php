<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Page;
use App\Models\Contentupload;
use App\Models\Setting;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Page::get(['*', 'id AS key']);
        return Inertia::render('Cms/Content/Pagelist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //$record = new Page();

        $slayout = Setting::where('type', '=', 'LAYOUT')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sgroup = Setting::where('type', '=', 'GROUP')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sptype = Setting::where('type', '=', 'PTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublish = Setting::where('type', '=', 'PUBLISH')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublic = Setting::where('type', '=', 'PUBLIC')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $scategory = Category::get(['id AS value', 'cname AS label', 'id AS key']);
        return Inertia::render('Cms/Content/Pageview', [
            'record' => new Page(),
            'slayout' => $slayout,
            'spublic' =>  $spublic,
            'sptype' =>  $sptype,
            'spublish'=> $spublish,
            'sgroup'=> $sgroup,
            'scategory' => $scategory,
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
        $attachment1 = null;
        $attachment2 = null;
        $attachment3 = null;
        $requestData = $request->all();
        if ($request->file('image')) {
            $image = $request->file('image')->store('content', 'public');
            $requestData['image'] = $image;
        }

        if ($request->file('thumb')) {
            $thumb = $request->file('thumb')->store('content', 'public');
            $requestData['thumb'] = $thumb;
        }

        if ($request->file('banner')) {
            $banner = $request->file('banner')->store('content', 'public');
            $requestData['banner'] = $banner;
        }


        if ($request->file('attachment1')) {
            $attachment1 = $request->file('attachment1')->store('content', 'public');
            $requestData['attachment1'] = $attachment1;
        }


        if ($request->file('attachment2')) {
            $attachment2 = $request->file('attachment2')->store('content', 'public');
            $requestData['attachment2'] = $attachment2;
        }


        if ($request->file('attachment3')) {
            $attachment3 = $request->file('attachment3')->store('content', 'public');
            $requestData['attachment3'] = $attachment3;
        }



        if ($request->has('title')){
            $requestData['slug'] = Str::slug($request->input('title'), "-");
        }


        $data = Page::create($requestData);
        $data->save();


        $category=Category::find($request->category_id);

        $scategory = $category->pages()->save($data);


        return to_route('page.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $slayout = Setting::where('type', '=', 'LAYOUT')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sgroup = Setting::where('type', '=', 'GROUP')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $sptype = Setting::where('type', '=', 'PTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublish = Setting::where('type', '=', 'PUBLISH')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublic = Setting::where('type', '=', 'PUBLIC')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $scategory = Category::get(['id AS value', 'cname AS label', 'id AS key']);

        $record = Page::find($id);
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


        if($record->attachment1 != null){
            $record->attachment1Path = asset('storage/'.$record->attachment1);
         }

         if($record->attachment2 != null){
            $record->attachment2Path = asset('storage/'.$record->attachment2);
         }

         if($record->attachment3 != null){
            $record->attachment3Path = asset('storage/'.$record->attachment3);
         }

        return Inertia::render('Cms/Content/Pageview', [
            'record' => $record,
            'slayout' => $slayout,
            'spublic' =>  $spublic,
            'sptype' =>  $sptype,
            'spublish'=> $spublish,
            'sgroup'=> $sgroup,
            'scategory' => $scategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {


//dd($request);

$page = Page::find($id);
        //dd($request);
        $image = null;
        $thumb = null;
        $banner = null;
        $attachment1 = null;
        $attachment2 = null;
        $attachment3 = null;
        $requestData = $request->all();
        if ($request->file('image')) {
            Storage::delete('public' . $page->image);
            $image = $request->file('image')->store('content', 'public');
            $requestData['image'] = $image;
        }

        if ($request->file('thumb')) {
            Storage::delete('public' . $page->thumb);
            $thumb = $request->file('thumb')->store('content', 'public');
            $requestData['thumb'] = $thumb;
        }

        if ($request->file('banner')) {
            Storage::delete('public' . $page->banner);
            $banner = $request->file('banner')->store('content', 'public');
            $requestData['banner'] = $banner;
        }


        if ($request->file('attachment1')) {
            Storage::delete('public' . $page->attachment1);
            $attachment1 = $request->file('attachment1')->store('content', 'public');
            $requestData['attachment1'] = $attachment1;
        }


        if ($request->file('attachment2')) {
            Storage::delete('public' . $page->attachment2);
            $attachment2 = $request->file('attachment2')->store('content', 'public');
            $requestData['attachment2'] = $attachment2;
        }


        if ($request->file('attachment3')) {
            Storage::delete('public' . $page->attachment3);
            $attachment3 = $request->file('attachment3')->store('content', 'public');
            $requestData['attachment3'] = $attachment3;
        }


        if ($request->has('title')){
            $requestData['slug'] = Str::slug($request->input('title'), "-");
        }





       // dd($requestData);

       $updated=$page->update($requestData);

       $category=Category::find($page->category_id);

       $scategory = $category->pages()->save($page);



        return to_route('page.index');
    }

// delete page assets
    public function deleteasset($id, $asset)
    {
        $page = Page::find($id);

        switch($asset) {
            case('thumb'):
                Storage::delete('public' . $page->thumb);
                $page->update(["thumb"=> null]);
                break;

            case('image'):
                Storage::delete('public' . $page->image);
                $page->update(["image"=> null]);
                break;


                case('banner'):
                    Storage::delete('public' . $page->banner);
                    $page->update(["banner"=> null]);
                    break;


                case('attachment1'):
                    Storage::delete('public' . $page->attachment1);
                    $page->update(["attachment1"=> null]);
                    break;

                case('attachment2'):
                    Storage::delete('public' . $page->attachment2);
                    $page->update(["attachment2"=> null]);
                    break;

                case('attachment3'):
                    Storage::delete('public' . $page->attachment3);
                    $page->update(["attachment3"=> null]);
                    break;
            default:

        }

//dd($asset);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $page = Page::find($id);
        //update logic
        if ($page->image !="") {
            Storage::delete('public' . $page->image);
        }

        if ($page->thumb !="") {
            Storage::delete('public' . $page->thumb);
        }


        if ($page->banner !="") {
            Storage::delete('public' . $page->banner);
        }

        if ($page->attachment1 !="") {
            Storage::delete('public' . $page->attachment1);
        }


        if ($page->attachment2 !="") {
            Storage::delete('public' . $page->attachment2);
        }


        if ($page->attachment3 !="") {
            Storage::delete('public' . $page->attachment3);
        }

        $page->delete();
        return to_route('page.index');
    }

    //update bulk attachments



}
