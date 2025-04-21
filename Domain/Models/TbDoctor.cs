using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbDoctor
    {
        public TbDoctor()
        {
            ClinicImages = new HashSet<TbClinicImage>();
            Patients = new HashSet<TbPatient>();
        }
        public int Id { get; set; }
        public string? Clinic { get; set; }
        public int Phone { get; set; }
        public string Brief { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string? Location { get; set; }

        // Forign Key
        public int SpecializationId { get; set; }
        public string AppUserId { get; set; }

        // Relations
        public ApplicationUser? AppUser { get; set; }
        public TbSpecialization? Specialization { get; set; }
        public virtual ICollection<TbClinicImage>? ClinicImages { get; set; }
        public virtual ICollection<TbPatient>? Patients { get; set; }
    }
}
