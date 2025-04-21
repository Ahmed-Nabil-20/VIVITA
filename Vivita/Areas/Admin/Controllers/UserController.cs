using Domain;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Services.User_Service;
using Utility.Consts;

namespace Vivita.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]
    public class UserController : Controller
    {
        private IUserService _userService;
        private IUnitOfWork _unitOfWork;
        public UserController(IUserService userService, IUnitOfWork unitOfWork)
        {
            _userService = userService;
            _unitOfWork = unitOfWork;
        }


        public async Task<IActionResult> Index()
        {
            List<UsersPageVM> model = await _userService.GetAllUsers().ToListAsync();

            return View(model);
        }

        public async Task<IActionResult> BlockedUsers()
        {
            List<UsersPageVM> model = await _userService.GetBlockedUsers().ToListAsync();

            return View("Index", model);
        }

        [HttpPost]
        public async Task<IActionResult> ToggleBlockUser(string id)
        {
            var result = await _userService.ToggleBlockUserAsync(id);
            if (result.Success)
            {
                TempData["Success"] = result.Message;

                return Json(new { success = true });
            }
            else
            {
                TempData["Error"] = result.Message;

                return Json(new { success = false });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _userService.DeleteUserAsync(id);
            if (result.Success)
            {
                TempData["Success"] = result.Message;

                return Json(new { success = true });
            }
            else
            {
                TempData["Error"] = result.Message;

                return Json(new { success = false });
            }
        }

    }
}
