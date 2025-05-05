# PT. Indo Web Solution - Website

This is the official website for PT. Indo Web Solution, a web development and SEO services company.

## Technologies Used

- **Backend**: Laravel 11
- **Frontend**: React
- **Bridge**: Inertia.js
- **Routing**: Inertia.js (SPA-like navigation)
- **Styling**: Tailwind CSS
- **Admin Panel**: React Admin with Material UI

## Features

- Modern, responsive design
- SPA-like navigation (no page reloads)
- Blog system
- Services showcase
- Team members presentation
- Contact form
- Admin panel for content management

## Installation

### Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js and npm
- MySQL

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/tupski/indowebsolution.git
   cd indowebsolution
   ```

2. Install PHP dependencies:
   ```
   composer install
   ```

3. Install JavaScript dependencies:
   ```
   npm install
   ```

4. Create a copy of the `.env.example` file:
   ```
   cp .env.example .env
   ```

5. Generate an application key:
   ```
   php artisan key:generate
   ```

6. Configure your database in the `.env` file:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=idwsdb
   DB_USERNAME=root
   DB_PASSWORD=mysql
   ```

7. Run the migrations:
   ```
   php artisan migrate
   ```

8. Build the assets:
   ```
   npm run build
   ```

9. Start the development server:
   ```
   php artisan serve
   ```

10. Visit `http://localhost:8000` in your browser.

## Admin Panel

The admin panel is accessible at `/admin`. You need to create a user first to access it:

```
php artisan tinker
$user = new App\Models\User();
$user->name = 'Admin';
$user->email = 'admin@example.com';
$user->password = Hash::make('password');
$user->role = 'admin';
$user->save();
```

## License

This project is proprietary and owned by PT. Indo Web Solution.

## Contact

For any inquiries, please contact us at info@indowebsolution.com.
