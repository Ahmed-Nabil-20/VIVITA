using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class TbParkinson
    {
        public int Id { get; set; }
        public double  Fo { get; set; }
        public double  Fhi { get; set; }
        public double  Flo { get; set; }
        public double  Jitter { get; set; }
        public double  JitterAbs { get; set; }
        public double  RAP { get; set; }
        public double  PPQ { get; set; }
        public double  DDP { get; set; }
        public double  Shimmer { get; set; }
        public double  ShimmerDb { get; set; }
        public double  ShimmerApq3 { get; set; }
        public double  ShimmerApq5 { get; set; }
        public double  Apq { get; set; }
        public double  Dda { get; set; }
        public double  Nhr { get; set; }
        public double  Hnr { get; set; }
        public double  Rpde { get; set; }
        public double  Dfa { get; set; }
        public double  Spread1 { get; set; }
        public double  Spread2 { get; set; }
        public double  D2 { get; set; }
        public double  Ppe { get; set; }

        public bool Status { get; set; }
        public DateTime CreationDateTime { get; set; } = DateTime.UtcNow;

        
        [ForeignKey("Patient")]
        public int PatientId { get; set; }

        // Relations
        public TbPatient? Patient { get; set; }

    }
}
