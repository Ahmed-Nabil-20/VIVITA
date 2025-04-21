using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class RegisterVM
    {
        [Required(ErrorMessage = "Username is important!")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is important!")]
        [EmailAddress(ErrorMessage = "The Email must be written correctly")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is important!")]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "Confirm password does not match password")]
        public string ConfirmPassword { get; set; }
    }
}
