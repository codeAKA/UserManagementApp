using System;
using System.Collections.Generic;
using System.Text;

namespace UserManagement.Contracts
{
    public interface IUnityOfWork
    {
        IUserRepository User { get; }
        void Save();
    }
}
