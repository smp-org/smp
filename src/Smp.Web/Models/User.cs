using System;
using Smp.Web.Models.Requests;

namespace Smp.Web.Models
{
    public class User
    {
        public User() {}

        public User(CreateUserRequest user)
        {
            Id = Guid.NewGuid();
            FullName = user.FullName;
            Password = user.Password;
            Email = user.Email;
            CreatedAt = DateTime.UtcNow;
        }

        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string ProfilePictureUrl { get; set; }
        public DateTime CreatedAt { get; set; }

        public static explicit operator User(DTOs.User user)
        {
            return new User
            {
                Id = user.Id,
                FullName = user.FullName,
                Password = user.Password,
                Email = user.Email,
                ProfilePictureUrl = user.ProfilePictureUrl,
                CreatedAt = user.CreatedAt
            };
        }
    }
}