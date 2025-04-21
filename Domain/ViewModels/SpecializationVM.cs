using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class SpecializationVM
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "This Filed is Required")]
        public string Name_EN { get; set; }

        [Required(ErrorMessage = "This Filed is Required")]
        public string Name_AR { get; set; }
    }
}
