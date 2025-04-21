using Domain.Interfaces_Repository;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess_EF.Repositories
{
    public class ClinicImageRepository : BaseRepository<TbClinicImage>, IClinicImageRepository
    {
        private readonly ApplicationDbContext _context;
        public ClinicImageRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
