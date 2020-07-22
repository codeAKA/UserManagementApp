using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserManagement.BL;
using UserManagement.BL.ModelsDTO;

namespace UserManagement.API
{
public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<UserForCreationDto, User>();
            CreateMap <UserForUpdateDto, User>();
        }
    }
}
