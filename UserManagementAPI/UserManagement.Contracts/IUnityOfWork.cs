using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Contracts
{
    public interface IUnityOfWork
    {
        IUserRepository User { get; }
        Task SaveAsync();
    }
}
