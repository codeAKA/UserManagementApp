using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using UserManagement.BL;

namespace UserManagement.DAL
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public virtual DbSet<User> Users { get; set; }
        
    }

    //public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    //{
    //    public ApplicationDbContext CreateDbContext(string[] args)
    //    {
    //        IConfigurationRoot configuration = new ConfigurationBuilder()
    //            .SetBasePath(Directory.GetCurrentDirectory())
    //            .AddJsonFile(@Directory.GetCurrentDirectory() + "/../UserManagementAPI/appsettings.json")
    //            .Build();

    //        var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
    //        var connectionString = configuration.GetConnectionString("DatabaseConnection");

    //        builder.UseSqlServer(connectionString, b => b.MigrationsAssembly("UserManagement.DAL"));

    //        return new ApplicationDbContext(builder.Options);
    //    }
    //}
}
