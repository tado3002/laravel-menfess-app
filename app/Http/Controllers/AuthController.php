<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectToGoogle()
    {
        session()->start();
        return Socialite::driver('google')->redirect();
    }
    public function handleGoogleCallback()
    {
        $userGoogle = Socialite::driver('google')->user();

        $user = User::where('email', $userGoogle->getEmail())->first();

        if (!$user) {
            $user = User::create([
                'name' => $userGoogle->getName(),
                'email' => $userGoogle->getEmail(),
                'google_id' => $userGoogle->getId(),
            ]);
        }

        Auth::login($user);
        return redirect('/');
    }
}
