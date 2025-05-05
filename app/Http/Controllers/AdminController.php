<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Contact;
use App\Models\Service;
use App\Models\Setting;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'blogs' => [
                'total' => Blog::count(),
                'published' => Blog::where('is_published', true)->count(),
                'draft' => Blog::where('is_published', false)->count(),
            ],
            'services' => [
                'total' => Service::count(),
                'active' => Service::where('is_active', true)->count(),
                'inactive' => Service::where('is_active', false)->count(),
            ],
            'team' => [
                'total' => TeamMember::count(),
            ],
            'contacts' => [
                'total' => Contact::count(),
                'unread' => Contact::where('is_read', false)->count(),
            ],
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }

    public function blogs()
    {
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(10);
        
        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
        ]);
    }

    public function services()
    {
        $services = Service::orderBy('order')->paginate(10);
        
        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
        ]);
    }

    public function teamMembers()
    {
        $teamMembers = TeamMember::orderBy('order')->paginate(10);
        
        return Inertia::render('Admin/TeamMembers/Index', [
            'teamMembers' => $teamMembers,
        ]);
    }

    public function contacts()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->paginate(10);
        
        return Inertia::render('Admin/Contacts/Index', [
            'contacts' => $contacts,
        ]);
    }

    public function settings()
    {
        $settings = Setting::orderBy('group')->orderBy('order')->get();
        
        // Group settings by their group
        $groupedSettings = $settings->groupBy('group');
        
        return Inertia::render('Admin/Settings/Index', [
            'groupedSettings' => $groupedSettings,
        ]);
    }
}
