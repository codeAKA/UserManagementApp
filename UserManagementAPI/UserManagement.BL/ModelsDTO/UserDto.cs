using System;
using System.Collections.Generic;
using System.Text;

namespace UserManagement.BL.ModelsDTO
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime RegistrationDate { get; set; }
        public bool Enable { get; set; }
    }
}
