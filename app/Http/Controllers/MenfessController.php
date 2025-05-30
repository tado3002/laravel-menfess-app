<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenfessRequest;
use App\Models\Menfess;
use Illuminate\Http\Request;

class MenfessController extends Controller
{
    public function create(Request $request, MenfessRequest $menfessRequest)
    {
        $data = $menfessRequest->validated();
        $user = $request->user();
        Menfess::create([
            ...$data,
            'user_id' => $user->id
        ]);

        return redirect()->back()->with('success', 'Menfess berhasil dikirim!');
    }
}
