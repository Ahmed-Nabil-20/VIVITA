using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbSpecialization
    {
        public TbSpecialization()
        {
            Doctors = new HashSet<TbDoctor>();
        }

        public int Id { get; set; }
        public string Name_EN { get; set; }
        public string Name_AR { get; set; }

        // Relations
        public virtual ICollection<TbDoctor>? Doctors { get; set; }
    }
}
