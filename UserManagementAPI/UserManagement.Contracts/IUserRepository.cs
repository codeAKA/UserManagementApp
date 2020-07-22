using System;
using System.Collections.Generic;
using System.Text;
using UserManagement.BL;

namespace UserManagement.Contracts
{
    public interface IUserRepository: IRepository<User>
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int userId);
        void CreateUser(User user);
        void UpdateUser(User user);
        void RemoveUser(User user);
    }
}
