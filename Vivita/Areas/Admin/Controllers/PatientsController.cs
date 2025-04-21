using Domain;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Services.User_Service;
using Utility.Consts;

namespace Vivita.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]
    public class PatientsController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IUserService _userService;
        private readonly UserManager<ApplicationUser> _userManager;

        public PatientsController(IUnitOfWork unitOfWork, IUserService userService, UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _userService = userService;
            _userManager = userManager;
        }


        public async Task<IActionResult> Index()
        {
            IEnumerable<TbPatient> patients = await _unitOfWork.TbPatients.GetAllAsync(new[] { "LungCancers", "Parkinsons" });

            return View(patients);
        }


        public async Task<IActionResult> Details(int id)
        {
            PatientDetailsVM model = new PatientDetailsVM();


            model.Patient = await _unitOfWork.TbPatients.GetFirstOrDefaultAsync(a => a.Id == id, new[] { "LungCancers", "Doctor", "Parkinsons" });
            model.User = await _userManager.FindByIdAsync(model.Patient.Doctor.AppUserId);

            return View(model);
        }



    }
}
