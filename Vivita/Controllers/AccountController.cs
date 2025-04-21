using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Services.User_Service;
using Utility.Consts;

namespace Vivita.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private IUserService _userService;
        public AccountController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, IUserService userService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _userService = userService;
        }


        public IActionResult Register()
        {
            if (_signInManager.IsSignedIn(User)) //verify if it's logged
            {
                return LocalRedirect("~/");
            }
            return View();
        }

        public IActionResult Login()
        {
            if (_signInManager.IsSignedIn(User)) //verify if it's logged
            {
                return LocalRedirect("~/");
            }
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Register(RegisterVM model, string role)
        {
            if (!ModelState.IsValid)
            {
                TempData["Error"] = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).FirstOrDefault();
                return View(model);
            }

            var findByEmail = await _userManager.FindByEmailAsync(model.Email);
            if (findByEmail is not null)
            {
                TempData["Error"] = "This Email already Existing";
                return View(model);
            }

            var findByUsername = await _userManager.FindByNameAsync(model.UserName);
            if (findByUsername is not null)
            {
                TempData["Error"] = "This Username already Existing";
                return View(model);
            }

            ApplicationUser user = new()
            {
                Email = model.Email,
                UserName = model.UserName
            };

            var createUser = await _userService.RegisterAsync(user, model.Password);
            if (createUser.Success)
            {
                await _userManager.AddToRoleAsync(user, Roles.Doctor);

                TempData["Success"] = createUser.Message;
                return RedirectToAction("LogIn");
            }
            else
            {
                TempData["Error"] = createUser.Message;
                return View(model);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Login(LoginVM model, string? returnUrl)
        {
            if (!ModelState.IsValid)
            {
                TempData["Error"] = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).FirstOrDefault();
                return View(model);
            }

            var result = await _userService.LoginAsync(model);
            if (result.Success)
            {
                TempData["Success"] = result.Message;

                if (!string.IsNullOrEmpty(returnUrl))
                    return LocalRedirect(returnUrl);
                else
                    return Redirect("/");
            }
            else
            {
                TempData["Error"] = result.Message;
            }

            return View(model);
        }


        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            TempData["Success"] = "LogOut Successfully!";
            return Redirect("/");
        }

      

    }
}
