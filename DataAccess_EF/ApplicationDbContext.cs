using Domain.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess_EF
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }


        public DbSet<TbContact> TbContacts { get; set; }
        public DbSet<TbSpecialization> TbSpecialization { get; set; }
        public DbSet<TbDoctor> TbDoctors { get; set; }
        public DbSet<TbClinicImage> TbClinicImages { get; set; }
        public DbSet<TbPatient> TbPatients { get; set; }
        public DbSet<TbRegistrationRequests> TbRegistrationRequests { get; set; }
        public DbSet<TbLungCancer> TbLungCancer { get; set; }
        public DbSet<TbParkinson> TbParkinson { get; set; }


    }
}
