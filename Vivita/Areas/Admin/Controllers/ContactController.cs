using Domain.Models;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Utility.Consts;

namespace Vivita.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = Roles.Admin)]
    public class ContactController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public ContactController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        public async Task<IActionResult> Index()
        {
            IEnumerable<TbContact> getAllContacts = await _unitOfWork.TbContacts.GetAllAsync();
            return View(getAllContacts);
        }

        [HttpPost]
        public async Task<IActionResult> ChangeStatus(int id, bool status)
        {
            var selectedItem = await _unitOfWork.TbContacts.GetFirstOrDefaultAsync(a => a.Id == id);
            if (selectedItem is not null)
            {
                selectedItem.Status = status;
                _unitOfWork.TbContacts.Update(selectedItem);
                await _unitOfWork.Complete();

                TempData["Success"] = "Update Status Successfully!";
            }

            return RedirectToAction("Index");
        }
    }
}
