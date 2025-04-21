using Domain.Models;
using Domain.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces_Repository
{
    public interface IRegistrationRequestsRepository : IBaseRepository<TbRegistrationRequests>
    {
        IQueryable<TbRegistrationRequests> GetLatestWeek();
        Task<RegistrationRequestsVM> RegistrationRequestsAsync();
    }
}
