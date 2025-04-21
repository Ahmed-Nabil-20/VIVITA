using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces_Repository
{
    public interface IBaseRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync(string[]? includes = null);
        Task<IEnumerable<T>> GetWhereAsync(Expression<Func<T, bool>> criteria, string[]? includes = null);
        Task<T> GetFirstOrDefaultAsync(Expression<Func<T, bool>> criteria, string[]? includes = null);

        Task<bool> FindAsync(Expression<Func<T, bool>> criteria);
        Task<int> CountAsync();
        Task<bool> AddAsync(T entity);
        bool Update(T entity);
        bool Delete(T entity);
    }
}
