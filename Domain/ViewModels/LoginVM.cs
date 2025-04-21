using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class LoginVM
    {
        [Required(ErrorMessage = "Email is important!")]
        [EmailAddress(ErrorMessage = "The Email must be written correctly")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is important!")]
        public string Password { get; set; }
    }
}
