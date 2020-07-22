using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using UserManagement.Contracts;
using UserManagement.DAL;

namespace UserManagement.Repositories
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        protected ApplicationDbContext ApplicationContext { get; set; }
        public Repository(ApplicationDbContext applicationContext)
        {
            this.ApplicationContext = applicationContext;
        }

        public IQueryable<T> FindAll()
        {
            return this.ApplicationContext.Set<T>().AsNoTracking();
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.ApplicationContext.Set<T>().Where(expression).AsNoTracking();
        }
        public void Create(T entity)
        {
            this.ApplicationContext.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            this.ApplicationContext.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            this.ApplicationContext.Set<T>().Update(entity);
        }
    }
}
