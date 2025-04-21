using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class UsersPageVM
    {
        public string UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string? FullName { get; set; }
        public byte[]? Photo { get; set; }
        public bool LockoutEnabled { get; set; }
        public string? RoleName { get; set; }
    }
}
