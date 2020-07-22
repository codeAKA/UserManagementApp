using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

        public IEnumerable<User> GetAllUsers()
        {
            return FindAll().OrderBy(user => user.Name).ToList();
        }

        public User GetUserById(int userId)
        {
            return FindByCondition(user => user.UserId.Equals(userId)).FirstOrDefault();
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
