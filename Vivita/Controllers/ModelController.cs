using Domain.Models;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Utility.Consts;
using Newtonsoft.Json;
using RestSharp;
using Vivita.services;

namespace Vivita.Controllers
{
    [Authorize(Roles = Roles.Doctor)]
    public class ModelController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IWebHostEnvironment _env;
        private IUnitOfWork _unitOfWork;
        private readonly AiService _aiService;

        public ModelController(IUnitOfWork unitOfWork, IWebHostEnvironment env, UserManager<ApplicationUser> userManager, AiService aiService)
        {
            _unitOfWork = unitOfWork;
            _env = env;
            _userManager = userManager;
            _aiService = aiService;
        }


        private async Task<ApplicationUser> GetCurrentUser()
        {
            return await _userManager.GetUserAsync(User);
        }


        public async Task<IActionResult> Index()
        {
            var currentUser = await GetCurrentUser();
            var userId = currentUser.Id;


            var doctor = await _unitOfWork.TbDoctors.GetFirstOrDefaultAsync(a => a.AppUserId == userId);


            if(doctor is null)
            {
                return RedirectToAction("Index", "Profile");
            }

            ViewBag.LstPatients = await _unitOfWork.TbPatients.GetWhereAsync(a => a.DoctorId == doctor.Id);

            return View();
        }


        [HttpPost]
        public async Task<IActionResult> LungCancer(TbLungCancer model)
        {
            var client = new RestClient(ModeBaseUrl.BaseUrl);
            var request = new RestRequest("Cancer/predict/", Method.Post);
            request.AddHeader("Content-Type", "application/json");

            var patient = await _unitOfWork.TbPatients.GetFirstOrDefaultAsync(a => a.Id == model.PatientId);

            var body = new
            {
                Age = patient.Age,
                Gender = patient.Gender == true ? 1 : 2,
                AirPollution = model.AirPollution,
                Alcoholuse = model.Alcoholuse,
                DustAllergy = model.DustAllergy,
                OccuPationalHazards = model.OccuPationalHazards,
                GeneticRisk = model.GeneticRisk,
                chronicLungDisease = model.ChronicLungDisease,
                BalancedDiet = model.BalancedDiet,
                Obesity = model.Obesity,
                Smoking = model.Smoking,
                PassiveSmoker = model.PassiveSmoker,
                ChestPain = model.ChestPain,
                CoughingofBlood = model.CoughingofBlood,
                Fatigue = model.Fatigue,
                WeightLoss = model.WeightLoss,
                ShortnessofBreath = model.ShortnessofBreath,
                Wheezing = model.Wheezing,
                SwallowingDifficulty = model.SwallowingDifficulty,
                ClubbingofFingerNail = model.ClubbingofFingerNail,
                FrequentCold = model.FrequentCold,
                DryCough = model.DryCough,
                Snoring = model.Snoring
            };
            var bodyy = JsonConvert.SerializeObject(body);
            request.AddBody(bodyy, "application/json");

            RestResponse response = await client.ExecuteAsync(request);

            if (response.Content is not null)
            {
                byte result = Convert.ToByte(response.Content!.Substring(14, 1));

                string message;
                if (result == 0)
                {
                    message = "Normal";
                    model.Status = false;
                }
                else
                {
                    message = "Positive Lung Cancer";
                    model.Status = true;
                }

                // Save Data
                await _unitOfWork.TbLungCancer.AddAsync(model);
                await _unitOfWork.Complete();

                return Json(new { success = true, message = message });
            }

            return Json(new {success = false, message = "Try again"});

        }
      
        [HttpPost]
        public async Task<IActionResult> DeleteLungCancer(int id)
        {
            var getLungCancerById = await _unitOfWork.TbLungCancer.GetFirstOrDefaultAsync(a => a.Id == id);
            if (getLungCancerById is not null)
            {
                _unitOfWork.TbLungCancer.Delete(getLungCancerById);

                await _unitOfWork.Complete();

                return Json(new { success = true, message = "Delete Row Successfully!" });
            }
            else
            {
                return Json(new { success = false, message = "This Row has already been Deleted" });
            }
        }



        [HttpPost]
        public async Task<IActionResult> Parkinson(TbParkinson model)
        {
            float[] body =
            {
                (float)model.Fo, (float)model.Fhi, (float)model.Flo, (float)model.Jitter, (float)model.JitterAbs,
                (float)model.RAP, (float)model.PPQ, (float)model.DDP, (float)model.Shimmer, (float)model.ShimmerDb,
                (float)model.ShimmerApq3, (float)model.ShimmerApq5, (float)model.Apq, (float)model.Dda,
                (float)model.Nhr, (float)model.Hnr, (float)model.Rpde, (float)model.Dfa, (float)model.Spread1,
                (float)model.Spread2, (float)model.D2, (float)model.Ppe
            };


            // Add Model
            bool result = _aiService.Predict(body);
            model.Status = result;

            string message;
            if (result == false)
                message = "Normal";
            else
                message = "Positive Parkison";

            // Save Data
            await _unitOfWork.TbParkinson.AddAsync(model);
            await _unitOfWork.Complete();

            return Json(new { success = true, message = message });
        }




    }
}
