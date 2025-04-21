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
    public class ParkinsonRepository : BaseRepository<TbParkinson>, IParkinsonRepository
    {
        private readonly ApplicationDbContext _context;
        public ParkinsonRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
