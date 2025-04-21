using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class PatientDetailsVM
    {
        public ApplicationUser? User { get; set; }
        public TbPatient? Patient { get; set; }
    }
}
