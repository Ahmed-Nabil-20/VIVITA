using Domain;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Utility.Consts;

namespace Vivita.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]
    public class SpecializationController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public SpecializationController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public async Task<IActionResult> Index()
        {
            IEnumerable<TbSpecialization> model = await _unitOfWork.TbSpecialization.GetAllAsync(new[] { "Doctors" });

            return View(model);
        }

        public async Task<IActionResult> EditSpecialization(int id)
        {
            if (id != 0)
            {
                var result = await _unitOfWork.TbSpecialization.GetFirstOrDefaultAsync(a => a.Id == id);

                SpecializationVM model = new();
                model.Id = result.Id;
                model.Name_EN = result.Name_EN;
                model.Name_AR = result.Name_AR;

                return View(model);
            }
            else
            {
                return View();
            }
        }

        [HttpPost]
        public async Task<IActionResult> SaveSpecialization(SpecializationVM model)
        {
            if (!ModelState.IsValid)
                return View("EditSpecialization", model);

            if (model.Id == 0)
            {
                // Add
                TbSpecialization tbSpecialization = new()
                {
                    Name_AR = model.Name_AR,
                    Name_EN = model.Name_EN
                };

                await _unitOfWork.TbSpecialization.AddAsync(tbSpecialization);
                TempData["Success"] = "Add New Specialization Successfully!";
            }
            else
            {
                // Edit
                TbSpecialization tbSpecialization = await _unitOfWork.TbSpecialization.GetFirstOrDefaultAsync(a => a.Id == model.Id);
                tbSpecialization.Name_AR = model.Name_AR;
                tbSpecialization.Name_EN = model.Name_EN;

                _unitOfWork.TbSpecialization.Update(tbSpecialization);
                TempData["Success"] = "Update Specialization Successfully!";
            }

            await _unitOfWork.Complete();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> DeleteSpecialization(int id)
        {
            var getSpecializationById = await _unitOfWork.TbSpecialization.GetFirstOrDefaultAsync(a => a.Id == id);
            if (getSpecializationById is not null)
            {
                _unitOfWork.TbSpecialization.Delete(getSpecializationById);
                await _unitOfWork.Complete();

                TempData["Success"] = "Delete Specialization Successfully!";

                return Json(new { success = true });
            }
            else
            {
                TempData["Error"] = $"Not Found Specialization with ID: {id}";

                return Json(new { success = false });
            }
        }

    }
}
