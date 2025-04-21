using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class RegistrationRequestsVM
    {
        public int[]? RegistrationCountArray { get; set; }
        public double? Average { get; set; }
        public int TotalRegistrations { get; set; }
        public double? DoctorAverage { get; set; }
        public double? PatientAverage { get; set; }
    }
}
