using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UserManagement.BL;

namespace UserManagement.Contracts
{
    public interface IUserRepository: IRepository<User>
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User> GetUserByIdAsync(int userId);
        void CreateUser(User user);
        void UpdateUser(User user);
        void RemoveUser(User user);
    }
}
