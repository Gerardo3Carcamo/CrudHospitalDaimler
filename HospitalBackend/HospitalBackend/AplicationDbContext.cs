using Microsoft.EntityFrameworkCore;
using HospitalBackend.Controllers.Models;

namespace HospitalBackend
{
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext()
        {
        }

        public AplicationDbContext(DbContextOptions options) : base(options){}
        public DbSet<Role> Roles => Set<Role>();
        public DbSet<Employee> Employees => Set<Employee>();
    }
}
