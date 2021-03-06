using Moq;
using Smp.Web.Controllers;
using Smp.Web.Repositories;
using Smp.Web.Services;
using Smp.Web.Validators;

namespace Smp.Web.Tests.Unit.Tests.ControllerTests.UsersControllerTests
{
    public class UserControllerTestBase
    {
        protected Mock<IUsersRepository> UsersRepository;
        protected Mock<IUserValidator> UserValidator;
        protected Mock<ICryptographyService> CryptographyService;

        protected UsersController UsersController;

        protected void Setup()
        {
            UsersRepository = new Mock<IUsersRepository>();
            UserValidator = new Mock<IUserValidator>();
            CryptographyService = new Mock<ICryptographyService>();
            UsersController =
                new UsersController(UsersRepository.Object, UserValidator.Object, CryptographyService.Object);
        }
    }
}
