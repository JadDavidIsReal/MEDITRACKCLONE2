# Integrating Laravel with the MediTrack Frontend

This document provides a guide on how to integrate the MediTrack frontend, built with React, with a Laravel backend.

## 1. Setting up the Laravel Backend

First, you need to set up a new Laravel project. If you don't have the Laravel installer, you can get it via Composer:

```bash
composer global require laravel/installer
```

Then, create a new Laravel project:

```bash
laravel new meditrack-api
cd meditrack-api
```

## 2. API Routes and Controllers

You will need to create API routes and controllers to handle the functionality required by the frontend. The main features to implement are:

*   **User Authentication**: Implement user authentication with Sanctum or Passport. Create endpoints for login, logout, and fetching the authenticated user's data.
*   **User Roles and Permissions**: Implement a role-based access control (RBAC) system. You can use a package like `spatie/laravel-permission` to manage roles and permissions.
*   **API Endpoints for Frontend Features**: Create API endpoints for all the features required by the frontend, such as:
    *   Fetching patient data (students, employees, community)
    *   Adding, editing, and deleting community patients
    *   Managing medicine stocks
    *   Viewing stock history
    *   Generating reports

Here is an example of how you might define your API routes in `routes/api.php`:

```php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PatientController;
// ... other controllers

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Patient routes
    Route::get('/patients/students', [PatientController::class, 'getStudents']);
    Route::get('/patients/employees', [PatientController::class, 'getEmployees']);
    Route::get('/patients/community', [PatientController::class, 'getCommunityPatients']);
    Route::post('/patients/community', [PatientController::class, 'addCommunityPatient']);
    // ... other patient routes
});
```

## 3. Database and Migrations

You will need to create database migrations for your tables, such as `users`, `patients`, `medicines`, `stock_history`, etc.

Run the migrations to create the tables in your database:

```bash
php artisan migrate
```

## 4. Connecting the Frontend to the Backend

In your React application, you will need to make API calls to your Laravel backend. You can use a library like `axios` to make HTTP requests.

Update your frontend code to fetch data from the API instead of using mock data. For example, in your `Login.tsx` component, you would make a POST request to the `/api/login` endpoint.

### CORS Configuration

You will need to configure Cross-Origin Resource Sharing (CORS) in your Laravel application to allow requests from your React frontend. You can do this by updating the `config/cors.php` file.

Add the URL of your React application to the `allowed_origins` array:

```php
'allowed_origins' => ['http://localhost:3000'], // or your React app's URL
```

## 5. Deployment

When deploying the application, you have a few options:

*   **Serve the React app from Laravel**: You can build your React app and place the build files in the `public` directory of your Laravel project. Then, create a catch-all route in `routes/web.php` to serve the React app.
*   **Deploy as separate applications**: You can deploy the Laravel API and the React frontend as two separate applications. This is a common approach for modern web applications.

This guide provides a basic overview of how to integrate the MediTrack frontend with a Laravel backend. For more detailed information, please refer to the official Laravel and React documentation.
