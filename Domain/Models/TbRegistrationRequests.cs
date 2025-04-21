using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbRegistrationRequests
    {
        public int Id { get; set; }
        public int TotalRegistrations { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
    }
}
