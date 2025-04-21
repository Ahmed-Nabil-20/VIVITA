using Domain.Interfaces_Repository;
using Domain.Models;
using Domain.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess_EF.Repositories
{
    public class RegistrationRequestsRepository : BaseRepository<TbRegistrationRequests>, IRegistrationRequestsRepository
    {
        private readonly ApplicationDbContext _context;
        public RegistrationRequestsRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public IQueryable<TbRegistrationRequests> GetLatestWeek()
        {
            IQueryable<TbRegistrationRequests> result =
                _context.TbRegistrationRequests
                .OrderByDescending(a => a.Date)
                .Take(7);

            return result;
        }

        public async Task<RegistrationRequestsVM> RegistrationRequestsAsync()
        {
            // Users
            var registrationRequests = GetLatestWeek().ToArray();

            RegistrationRequestsVM model = new();
            model.RegistrationCountArray = new int[7];
            for (int i = 0; i < 7; i++)
            {
                model.RegistrationCountArray[i] = registrationRequests[6 - i].TotalRegistrations;
            }

            double average = ((double)(model.RegistrationCountArray[6] / (double)model.RegistrationCountArray[0]) * 100 - 100);
            if (average == 1)
                model.Average = 0;
            else
                model.Average = average;

            int usersCount = await _context.Users.AsNoTracking().AsQueryable().CountAsync();
            double doctorsCount = await _context.TbDoctors.AsNoTracking().AsQueryable().CountAsync();
            double patientsCount = usersCount - doctorsCount;

            model.TotalRegistrations = usersCount;
            model.DoctorAverage = ((doctorsCount / usersCount) * 100);
            model.PatientAverage = ((patientsCount / usersCount) * 100);

            return model;
        }
    }
}
