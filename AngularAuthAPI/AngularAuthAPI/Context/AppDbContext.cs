using Microsoft.EntityFrameworkCore;

namespace AngularAuthAPI;

public class AppDbContext:DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
    {
    
    }

    public DbSet<User> Users { get; set; }
    //takes entity and send it to the table
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().ToTable("users");
    }

}
