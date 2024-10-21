<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Region\TeamController;
use App\Http\Controllers\Staff\StaffController;
use App\Http\Controllers\Region\FeederController;
use App\Http\Controllers\Region\RegionController;
use App\Http\Controllers\Inventory\ItemController;
use App\Http\Controllers\Inventory\MeterController;
use App\Http\Controllers\Inventory\RequestController;
use App\Http\Controllers\Dependency\DropDownController;
use App\Http\Controllers\Dependency\DependencyController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::get('/view-rrr',[InvoiceController::class,'viewRrr'])->name('rrr');
    Route::get('/view-payment',[InvoiceController::class,'viewPayment'])->name('payment');
    Route::inertia('/generate-rrr','Rrr/Generate')->name('generate');
    Route::post('/generate-rrr',[InvoiceController::class,'generateRRR'])->name('generate');
    Route::get('/set-price', [InvoiceController::class, 'getMeterPrice'])->name('set.price');
    Route::post('/set-price', [InvoiceController::class, 'setMeterPrice']);
    Route::get('/preview-rrr', [InvoiceController::class, 'previewRRR'])->name('preview.rrr');


    // admin 
    Route::get('/dependency', [DependencyController::class, 'index'])->name('dependency');
    Route::get('/feeders', [FeederController::class, 'index'])->name('feeders');
    Route::get('/load-all-regions', [RegionController::class, 'index'])->name('load.regions');
    Route::post('/create-region', [RegionController::class, 'createRegion'])->name('create.region');

    // create store Item 
    Route::post('/create-item-name', [ItemController::class, 'createItemName']);
    Route::get('/item-names', [ItemController::class, 'loadItemNames']);
    
    Route::post('/create-trading-zone', [DependencyController::class, 'createTradingZone'])->name('create.zone');
    Route::get('/load-trading-zone', [DependencyController::class, 'loadTradingZone'])->name('load.zone');


    Route::post('/create-meter-type', [DependencyController::class, 'createMeterType'])->name('create.zone');
    Route::get('/load-meter-types', [DependencyController::class, 'loadMeterTypes'])->name('load.zone');

    Route::post('/create-meter-brand', [DependencyController::class, 'createMeterBrand'])->name('create.types');
    Route::get('/load-meter-brand', [DependencyController::class, 'loadMeterBrands'])->name('load.brands');

    Route::post('/create-33kv-feeder', [FeederController::class, 'create33kvFeeder'])->name('create.33kv.feeder');
    Route::get('/load-feeder-33', [FeederController::class, 'load33kvFeeder']); //->name('create.33kv.feeder');
    Route::post('/create-11kv-feeder', [FeederController::class, 'create11kvFeeder'])->name('create.11kv.feeder');
    Route::get('/load-feeder-11', [FeederController::class, 'load11kvFeeder']); //->name('create.33kv.feeder');


    // users 
    Route::inertia('/staff', 'Staff/Staff')->name('create.staff');
    Route::post('/staff', [StaffController::class, 'createStaff']);
    Route::get('/load-staff', [StaffController::class, 'loadStaff']);

    // request 
    Route::inertia('/request', 'Region/Request')->name('request');
    Route::get('/load-request', [RequestController::class, 'index']);
    Route::get('/load-request-list', [RequestController::class, 'loadRequestList']);
    Route::post('/request-item', [RequestController::class, 'itemRequest']);
    Route::inertia('/request-list', 'Region/RequestList')->name('request.list');

    //Schedule 
    Route::get('/schedules', [DependencyController::class, 'schedules'])->name('schedules');
    Route::post('/schedules', [DependencyController::class, 'uploadSchedule']);


    Route::get('/meter-list', [MeterController::class, 'index'])->name('meter.list');
    Route::post('/meter-list', [MeterController::class, 'addMeterList']);
    Route::get('/inventory-list', [ItemController::class, 'inventoryList'])->name('inventory.list');
    Route::post('/add-inventory-item', [ItemController::class, 'addInventoryItem'])->name('add.inventory.item');
    Route::post('/remove-damage-item', [ItemController::class, 'removeDamageItem'])->name('remove.damage.item');
    Route::get('/damaged-items', [ItemController::class, 'damagedItems'])->name('damage.item');
    Route::get('/damaged-item-details', [ItemController::class, 'damagedItemDetail'])->name('damaged.item.detail');



    Route::get('/meter-list', [MeterController::class, 'index'])->name('meter.list');
    Route::inertia('/teams', 'Region/Team')->name('teams');
    Route::get('/load-teams', [TeamController::class, 'loadTeams'])->name('load.teams');
    Route::post('/create-team', [TeamController::class, 'createTeam'])->name('create.team');
    Route::post('/add-team-member', [TeamController::class, 'addTeamMember'])->name('add.team.member');
    Route::get('/load-team-member', [TeamController::class, 'loadTeamMembers'])->name('load.team.members');



    Route::inertia('/team-assigned-meters', 'Region/TeamAssignedMeter')->name('assigned.meters');



    Route::inertia('/installations', 'Region/Installations')->name('installations');
    Route::get('/schedule-list', [DependencyController::class, 'scheduleList'])->name('schedule.list');
    Route::get('/search-schedule-list/{query}', [DependencyController::class, 'searchScheduleList']);//->name('schedule.list');
    Route::post('/record-form', [MeterController::class, 'RecordForm'])->name('record.form');
    Route::get('/installed-list', [MeterController::class, 'installedList']);//->name('record.form');


    Route::middleware(['role:staff,super admin'])->group(function () {});

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/drop-states', [DropDownController::class, 'loadStates'])->name('load.states');
Route::get('/drop-state-lga/{id}', [DropDownController::class, 'loadStateLga'])->name('load.state.lga');
Route::get('/drop-state-regions', [DropDownController::class, 'loadStateRegion']); //->name('load.regions');
Route::get('/drop-regions/{state}', [DropDownController::class, 'loadRegions']); //->name('load.regions');
Route::get('/drop-regions-admin', [DropDownController::class, 'loadRegionsAdmin']); //->name('load.regions');
Route::get('/drop-feeder-33/{region}', [DropDownController::class, 'loadRegion33KvFeeder']); //->name('load.regions');
Route::get('/drop-feeder-11/{feeder33}', [DropDownController::class, 'loadRegion11KvFeeder']); //->name('load.regions');
Route::get('/drop-item-names', [DropDownController::class, 'loadItemName']);
Route::get('/drop-item-quantity', [DropDownController::class, 'loadItemQuantity']);
Route::get('/drop-teams', [DropDownController::class, 'loadTeams']);
Route::get('/drop-roles', [DropDownController::class, 'dropDownRoles']);
Route::get('/drop-users', [DropDownController::class, 'dropDownUsers']);
Route::get('/drop-zone-state', [DropDownController::class, 'dropDownZoneState']);
Route::get('/drop-zone/{state_id}', [DropDownController::class, 'dropDownZone']);
Route::get('/drop-meter-types', [DropDownController::class, 'dropDownMeterType']);
Route::get('/drop-meter-brands', [DropDownController::class, 'dropDownMeterBrand']);

require __DIR__.'/auth.php';
