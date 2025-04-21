using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class ProfilePageVM
    {
        public ApplicationUser? User { get; set; }
        public TbDoctor? Doctor { get; set; }
        public TbPatient? Patient { get; set; }
    }
}
