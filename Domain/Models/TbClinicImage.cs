using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbClinicImage
    {
        public int Id { get; set; }
        public byte[] Image { get; set; }

        // Forign Key
        public int DoctorId { get; set; }

        // Relations
        public TbDoctor? Doctor { get; set; }
    }
}
