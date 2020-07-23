using System;

namespace UserManagement.BL.ModelsDTO
{
    public class UserForUpdateDto
    {
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public bool Enable { get; set; }
    }
}
