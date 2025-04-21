using Domain.Interfaces_Repository;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess_EF.Repositories
{
    public class DoctorRepository : BaseRepository<TbDoctor>, IDoctorRepository
    {
        private readonly ApplicationDbContext _context;
        public DoctorRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<int> GetIdByUserIdAsync(string userId)
        {

            var item = await _context.TbDoctors.AsNoTracking()
                .FirstOrDefaultAsync(a => a.AppUserId == userId);

            int doctorId = item.Id;

            return doctorId;
        }

        public IQueryable<TbDoctor> GetUserIdFromAllAsync()
        {
            IQueryable<TbDoctor> doctors = _context.TbDoctors;

            return doctors;
        }
    }
}
