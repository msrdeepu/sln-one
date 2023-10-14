<?php

namespace App\Http\Controllers;

use App\Models\Widget;
use Inertia\Inertia;
use App\Models\Page;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class WidgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resource = Widget::get(['*', 'id AS key']);
        return Inertia::render('Cms/Widgets/Widgetlist', [
            'resource' => $resource,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $urls=Page::get(['slug AS value','title AS label','id AS key']);
        $sltype = Setting::where('type', '=', 'LTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $swtype = Setting::where('type', '=', 'WTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublish = Setting::where('type', '=', 'PUBLISH')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $slocation = Setting::where('type', '=', 'LOCATION')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        return Inertia::render('Cms/Widgets/Widgetview', [
            'record' => new Widget(),
            'swtype' =>  $swtype,
            'spublish'=> $spublish,
            'slocation'=> $slocation,
            'surls' => $urls,
            'sltype' => $sltype,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $requestData = $request->all();

        $image = null;
        $bgimage = null;
        $banner = null;
        if ($request->file('image')) {
            $image = $request->file('image')->store('widget', 'public');
            $requestData['image'] = $image;
        }

        if ($request->file('bgimage')) {
            $bgimage = $request->file('bgimage')->store('widget', 'public');
            $requestData['bgimage'] = $bgimage;
        }

        if ($request->file('banner')) {
            $banner = $request->file('banner')->store('widget', 'public');
            $requestData['banner'] = $banner;
        }





        $data = Widget::create($requestData);
        $data->save();
        return Inertia::location(route('widget.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Widget $widget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $urls=Page::get(['slug AS value','title AS label','id AS key']);
        $sltype = Setting::where('type', '=', 'LTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $swtype = Setting::where('type', '=', 'WTYPE')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $spublish = Setting::where('type', '=', 'PUBLISH')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);
        $slocation = Setting::where('type', '=', 'LOCATION')->where('status', '=', 'ACTIVE')->get(['name AS label', 'value', 'id AS key']);

        $record = Widget::find($id);
        //adding image path
        if($record->bgimage != null){
           $record->bgimagePath = asset('storage/'.$record->bgimage);
        }
        if($record->image != null){
           $record->imagePath = asset('storage/'.$record->image);
        }

        if($record->banner != null){
           $record->bannerPath = asset('storage/'.$record->banner);
        }


        return Inertia::render('Cms/Widgets/Widgetview', [
            'record' => $record,
            'swtype' =>  $swtype,
            'spublish'=> $spublish,
            'slocation'=> $slocation,
            'surls' => $urls,
            'sltype' => $sltype,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $widget = Widget::find($id);
        //dd($request);
        $image = null;
        $bgimage = null;
        $banner = null;

        $requestData = $request->all();

        if ($request->file('image')) {
            Storage::delete('public' . $widget->image);
            $image = $request->file('image')->store('widget', 'public');
            $requestData['image'] = $image;
        }

        if ($request->file('bgimage')) {
            Storage::delete('public' . $widget->bgimage);
            $bgimage = $request->file('bgimage')->store('widget', 'public');
            $requestData['bgimage'] = $bgimage;
        }

        if ($request->file('banner')) {
            Storage::delete('public' . $widget->banner);
            $banner = $request->file('banner')->store('widget', 'public');
            $requestData['banner'] = $banner;
        }


        $updated=$widget->update($requestData);

        return Inertia::location(route('widget.index'));


    }


    public function deleteasset($id, $asset)
    {
        $widget = Widget::find($id);

        switch($asset) {
            case('bgimage'):
                Storage::delete('public' . $widget->bgimage);
                $widget->update(["bgimage"=> null]);
                break;

            case('image'):
                Storage::delete('public' . $widget->image);
                $widget->update(["image"=> null]);
                break;


                case('banner'):
                    Storage::delete('public' . $widget->banner);
                    $widget->update(["banner"=> null]);
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
        $data = Widget::find($id);


        //update logic
        if ($data->image !="") {
            Storage::delete('public' . $data->image);
        }

        if ($data->bgimage !="") {
            Storage::delete('public' . $data->bgimage);
        }


        if ($data->banner !="") {
            Storage::delete('public' . $data->banner);
        }



        $data->delete();
        return Inertia::location(route('widget.index'));
    }
}
