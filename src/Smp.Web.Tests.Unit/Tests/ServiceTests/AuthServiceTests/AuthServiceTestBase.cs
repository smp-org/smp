using Smp.Web.Services;
using Moq;
using Smp.Web.Repositories;
using Microsoft.Extensions.Configuration;

namespace Smp.Web.Tests.Unit.Tests.ServiceTests.AuthServiceTests
{
    public class AuthServiceTestBase
    {
        protected Mock<IConfiguration> Configuration;
        protected Mock<IUsersRepository> UserRepository;
        protected Mock<ICryptographyService> CryptographyService;
        protected Mock<IRelationshipsService> RelationshipsService;

        protected IAuthService AuthService;

        public void Setup()
        {
            Configuration = new Mock<IConfiguration>();
            UserRepository = new Mock<IUsersRepository>();
            CryptographyService = new Mock<ICryptographyService>();
            RelationshipsService = new Mock<IRelationshipsService>();

            AuthService = new AuthService(Configuration.Object, UserRepository.Object, CryptographyService.Object, RelationshipsService.Object);
        }
    }
}