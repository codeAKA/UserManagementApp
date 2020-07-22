﻿using System;
using System.Collections.Generic;
using System.Text;
using UserManagement.Contracts;
using UserManagement.DAL;

namespace UserManagement.Repositories
{
    public class UnityOfWork : IUnityOfWork
    {
        private ApplicationDbContext _appContext;
        private IUserRepository _user;

        public IUserRepository User {
            get {
                if(_user == null)
                {
                    _user = new UserRepository(_appContext);
                }
                return _user;
            }
        }

        public UnityOfWork(ApplicationDbContext applicationContext)
        {
            _appContext = applicationContext;
        }

        public void Save()
        {
            _appContext.SaveChanges();
        }
    }
}
