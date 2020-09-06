using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserManagement.BL;
using UserManagement.Contracts;
using UserManagement.DAL;

namespace UserManagement.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(ApplicationDbContext applicationContext) :base(applicationContext)
        {
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await FindAll().OrderBy(user => user.Name).ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(int userId)
        {
            return await FindByCondition(user => user.UserId.Equals(userId)).FirstOrDefaultAsync();
        }

        public void CreateUser(User user)
        {
            Create(user);
        }

        public void UpdateUser(User user)
        {
            Update(user);
        }

        public void RemoveUser(User user)
        {
            Delete(user);
        }
    }
}
