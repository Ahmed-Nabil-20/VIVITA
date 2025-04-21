using Domain;
using Domain.ViewModels;
using Hangfire;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Services.User_Service;
using Utility.Consts;

namespace Vivita.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]
    public class HomeController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IUserService _userService;
        public HomeController(IUnitOfWork unitOfWork, IUserService userService)
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
        }




        public async Task<IActionResult> Index()
        {
            // Hangfire
            RecurringJob.AddOrUpdate(() => _userService.SaveTotlaRegistrationsEveryDay(), Cron.Daily);

            DashboardPageVM model = new();
            model.AllUsers = await _userService.GetAllUsers().CountAsync();
            model.BlockedUsers = await _userService.GetBlockedUsers().CountAsync();
            model.Specializations = await _unitOfWork.TbSpecialization.CountAsync();
            model.Contacts = await _unitOfWork.TbContacts.CountAsync();
            model.LungCancers = await _unitOfWork.TbLungCancer.CountAsync();
            model.Parkinsons = await _unitOfWork.TbParkinson.CountAsync();

            return View(model);
        }
    }
}
