using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class DashboardPageVM
    {
        public int AllUsers { get; set; }
        public int BlockedUsers { get; set; }
        public int Specializations { get; set; }
        public int Contacts { get; set; }
        public int LungCancers { get; set; }
        public int Parkinsons { get; set; }
    }
}
