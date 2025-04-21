using DataAccess_EF;
using Domain;
using Domain.Models;
using Hangfire;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Services.User_Service;
using Vivita.services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSession();
builder.Services.AddHttpContextAccessor();
builder.Services.AddDistributedMemoryCache();

// Add Resources File
builder.Services.AddControllersWithViews()
    .AddViewLocalization(op =>
    {
        op.ResourcesPath = "Resources";
    });

// Add Hangfire
builder.Services.AddHangfire(x => x.UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHangfireServer();

// Connection With Database
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString,
        b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)
    )
);

// Add Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => {
    options.Password.RequiredLength = 5;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequireDigit = true;
    options.User.RequireUniqueEmail = true;
}).AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();

// Configure TokenLifespan
builder.Services.Configure<DataProtectionTokenProviderOptions>(options =>
{
    options.TokenLifespan = TimeSpan.FromDays(7);
});
builder.Services.Configure<SecurityStampValidatorOptions>(options =>
{
    // enables immediate logout, after updating the user's stat.
    options.ValidationInterval = TimeSpan.Zero;
});

// Configure Cookie
builder.Services.ConfigureApplicationCookie(options =>
{
    options.AccessDeniedPath = "/";
    options.Cookie.Name = "Cookie";
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromHours(24);
    options.LoginPath = "/Account/Login";
    options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
    options.SlidingExpiration = true;
});


// Add Dependence Injection
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddSingleton<AiService>();

// Localization
builder.Services.AddLocalization();


// Pagination
builder.Services.AddCloudscribePagination();

var app = builder.Build();


// Run Code Once at Application
using (var scope = app.Services.CreateScope())
{
    var provider = scope.ServiceProvider;

    var userService = provider.GetRequiredService<IUserService>();
    await userService.Initialize();
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// Use Cultures
var supportedCulture = new[] { "ar-SA", "en-US" };
app.UseRequestLocalization(r =>
{
    r.AddSupportedUICultures(supportedCulture);
    r.AddSupportedCultures(supportedCulture);
    r.SetDefaultCulture("en-US");
});

app.UseSession();
app.UseAuthentication();
app.UseAuthorization();
app.UseHangfireDashboard("/Hangfire");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
      name: "areas",
      pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");
});

app.Run();
