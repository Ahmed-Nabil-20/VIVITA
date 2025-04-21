using Domain.Models;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Vivita.Controllers
{
    public class ContactController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public ContactController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(TbContact model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    await _unitOfWork.TbContacts.AddAsync(model);
                    await _unitOfWork.Complete();

                    TempData["Success"] = "Send you Message Successfully!";
                }
                else
                {
                    TempData["Error"] = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).FirstOrDefault();
                    return View("Index", model);
                }
            }
            catch (Exception ex)
            {
                TempData["Error"] = ex.Message;
            }

            return RedirectToAction("Index");
        }

    }
}
