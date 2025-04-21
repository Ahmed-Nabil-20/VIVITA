using Microsoft.AspNetCore.Mvc;
using Vivita.services;

namespace Vivita.Controllers
{
    public class AboutController : Controller
    {
        public AboutController()
        {

        }


        public IActionResult Index()
        {
            //float[] input_data = new float[]
            //{
            //    116.676f, 137.871f, 111.366f, 0.00997f, 0.00009f,
            //    0.00502f, 0.00698f, 0.01505f, 0.05492f, 0.517f,
            //    0.02924f, 0.04005f, 0.03772f, 0.08771f, 0.01353f,
            //    20.644f, 1f, 0.434969f, 0.819235f, -4.117501f,
            //    0.334147f, 2.405554f
            //};



            //float[] input_data = new float[]
            //{
            //    197.07600f, 206.89600f, 192.05500f, 0.00289f, 0.00001f,
            //    0.00166f, 0.00168f, 0.00498f, 0.01098f, 0.09700f,
            //    0.00563f, 0.00680f, 0.00802f, 0.01689f, 0.00339f,
            //    26.77500f, 0.422229f, 0.741367f, -7.348300f, 0.177551f,
            //    1.743867f, 0.085569f
            //};

            return View();
        }
    }
}
