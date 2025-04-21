using System.Diagnostics;
using Domain;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace Vivita.Controllers
{
    public class HomeController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public HomeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            return View();
        }

        // Switch Between Cultures
        public IActionResult SetCulture(string lang, string returnUrl)
        {
            if (!string.IsNullOrEmpty(lang))
            {
                Response.Cookies.Append(
                    CookieRequestCultureProvider.DefaultCookieName,
                    CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(lang)),
                    new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
                );
            }
            return Redirect(returnUrl);
        }


    }
}
