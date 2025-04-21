using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbPatient
    {
        public TbPatient()
        {
            LungCancers = new HashSet<TbLungCancer>();
            Parkinsons = new HashSet<TbParkinson>();
        }

        public int Id { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }
        public DateTime CreationDate { get; set; } = DateTime.UtcNow;

        // Forign Key
        public int DoctorId { get; set; }

        // Relations
        public TbDoctor? Doctor { get; set; }
        public virtual ICollection<TbLungCancer> LungCancers { get; set; }
        public virtual ICollection<TbParkinson> Parkinsons { get; set; }
    }
}
