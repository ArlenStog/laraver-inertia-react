<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class PostController extends Controller
{
    // index, show, edit, update...


    public function index(): Response {
        return Inertia::render('posts/index',[
            'posts' => Post::with('user')->latest()->get()
        ]);
    }


    
    public function show(string $id): Response{
        return Inertia::render('posts/show', [
            'post' => Post::with('user')->findOrFail($id)
        ]);
    }
    
    public function create():Response {
        return Inertia::render('posts/create');
    }

        public function store(Request $request):RedirectResponse {
        // Validate submited data
        // Create the post in db
        // redirect to /posts

        $validated = $request->validate([
            'title'=>'required|string|min:3|max:255',
            'body' => 'required|string|min:10|max:255'
        ]);
        Post::create([
            ...$validated,
            'user_id' => User::inRandomOrder()->first()->id
        ]);

        return redirect('/posts');
    }
}
